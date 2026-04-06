闲鱼智能管理系统 - Linux 版本（开源版）
========================================

【系统要求】
- Linux x64（Ubuntu 18.04+, CentOS 7+ 等）
- 需安装 Node.js 22+
- 需安装 Google Chrome（GitHub 仓库不包含 .deb 安装包）

【安装 Node.js】（首次使用前执行一次）

  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt-get install -y nodejs

【安装 Google Chrome】（首次使用前执行一次）

  wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
  sudo dpkg -i google-chrome-stable_current_amd64.deb
  sudo apt-get install -f -y

安装后程序将自动使用 /usr/bin/google-chrome-stable


【使用说明】

1. 给脚本添加执行权限
   chmod +x *.sh

2. 安装运行依赖
   cd app
   npm install --omit=dev
   cd ..

3. 启动程序（三选一）
    
    方式一：控制台模式
    ./start.sh
   
   方式二：后台模式
   ./start-background.sh

   方式三：PM2 守护（一键启动，崩溃自动重启、开机自启，适合服务器）
   chmod +x start-pm2.sh stop-pm2.sh
   ./start-pm2.sh（如提示缺少 PM2，请先执行 npm install -g pm2）
   停止：./stop-pm2.sh
   开机自启：pm2 save && pm2 startup

4. 访问系统
   http://localhost:3000
   或 http://服务器IP:3000

5. 停止程序
   普通/后台模式：./stop.sh
   PM2 模式：./stop-pm2.sh

6. 查看日志（后台模式）
   tail -f logs/runtime.log

7. 开机自启（可选）
   chmod +x start-at-boot.sh
   将 `start-at-boot.sh` 配置到 systemd、crontab 或 rc.local

【文件说明】
├── app/                     主程序
├── node/                    本地打包版可选内置 Node.js（GitHub 仓库不包含）
├── public/                  前端资源（请勿删除）
├── browsers/                Chrome 安装说明
├── logs/                    日志目录（自动创建）
├── data/                    数据目录（自动创建）
└── *.sh                     启动/停止脚本

【注意事项】
- 请确保 public 文件夹与 goofishcbot 在同一目录
- 首次使用前请先安装 Node.js
- 首次使用前请先安装 Google Chrome
- 首次运行前请先执行 `cd app && npm install --omit=dev`
- 已移除授权校验，可直接启动使用
- 如需外网访问，请开放 3000 端口

如有问题，请联系管理员。
