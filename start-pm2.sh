#!/bin/bash
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"
# 包内 Node 可能因在 Windows 上打 tar 而无可执行权限，解压后补上
[ -f "$SCRIPT_DIR/node/bin/node" ] && chmod +x "$SCRIPT_DIR/node/bin/node" 2>/dev/null || true
NODE_BIN="node"
if [ -x "$SCRIPT_DIR/node/bin/node" ]; then
  NODE_BIN="$SCRIPT_DIR/node/bin/node"
fi
# 若附带 Google Chrome 安装包，未安装时尝试自动安装（首次可能需输入 sudo 密码）
if [ -f "$SCRIPT_DIR/browsers/google-chrome-stable_current_amd64.deb" ] && ! command -v google-chrome-stable &>/dev/null; then
  echo "正在安装 Google Chrome（首次可能需要输入 sudo 密码）..."
  sudo dpkg -i "$SCRIPT_DIR/browsers/google-chrome-stable_current_amd64.deb" 2>/dev/null
  sudo apt-get install -f -y -qq 2>/dev/null
fi
# 让 PM2 子进程能用到 Chrome（与 start.sh 行为一致）
if command -v google-chrome-stable &>/dev/null; then
  export CHROME_PATH="/usr/bin/google-chrome-stable"
fi
mkdir -p logs
if [ -f "$SCRIPT_DIR/node_modules/pm2/bin/pm2" ]; then
  "$NODE_BIN" "$SCRIPT_DIR/node_modules/pm2/bin/pm2" start ecosystem.config.cjs
else
  if ! command -v pm2 &>/dev/null; then
    echo "[ERROR] PM2 not in package. Please install: npm install -g pm2"
    exit 1
  fi
  pm2 start ecosystem.config.cjs
fi
echo ""
echo "Started. URL: http://localhost:3000"
echo "Logs: pm2 logs goofishcbot"
echo "Stop: ./stop-pm2.sh"
echo "Save for startup: pm2 save && pm2 startup"
