#!/bin/bash
echo "========================================"
echo "   闲鱼智能管理系统 - 控制台模式"
echo "========================================"
echo ""

# 获取脚本所在目录的绝对路径
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# 使用包内 Node.js（若有），否则使用系统 node（Windows 打包的包拷到 Linux 后需补执行权限，这里自动修复）
if [ -f "$SCRIPT_DIR/node/bin/node" ]; then
    chmod +x "$SCRIPT_DIR/node/bin/node" 2>/dev/null || true
fi
NODE_BIN="node"
if [ -x "$SCRIPT_DIR/node/bin/node" ]; then
    NODE_BIN="$SCRIPT_DIR/node/bin/node"
fi

# 若附带 Google Chrome 安装包，未安装时尝试自动安装（首次可能需输入 sudo 密码）
if [ -f "./browsers/google-chrome-stable_current_amd64.deb" ]; then
    if ! command -v google-chrome-stable &>/dev/null; then
        echo "正在安装 Google Chrome（首次可能需要输入 sudo 密码）..."
        sudo dpkg -i ./browsers/google-chrome-stable_current_amd64.deb 2>/dev/null
        sudo apt-get install -f -y -qq 2>/dev/null
    fi
    if command -v google-chrome-stable &>/dev/null; then
        export CHROME_PATH="/usr/bin/google-chrome-stable"
        echo "使用 Google Chrome: $CHROME_PATH"
    else
        echo "未检测到 Google Chrome，请手动执行: sudo dpkg -i ./browsers/google-chrome-stable_current_amd64.deb && sudo apt-get install -f -y"
    fi
fi

echo "提示：按 Ctrl+C 停止程序"
echo "访问地址：http://localhost:3000"
echo ""

mkdir -p data logs

exec "$NODE_BIN" app/index.js
