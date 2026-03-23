#!/bin/bash
echo "正在停止闲鱼智能管理系统..."
pkill -f "app/index.js"
if [ $? -eq 0 ]; then
    echo "程序已成功停止"
else
    echo "程序未在运行"
fi
