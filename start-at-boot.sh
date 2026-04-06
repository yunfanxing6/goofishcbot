#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

mkdir -p data logs
LOG_FILE="$SCRIPT_DIR/logs/boot-start.log"
NODE_BIN="$SCRIPT_DIR/node/bin/node"

if [ ! -x "$NODE_BIN" ]; then
  NODE_BIN="$(command -v node)"
fi

if [ -z "$NODE_BIN" ]; then
  printf '[%s] node not found\n' "$(date '+%F %T')" >> "$LOG_FILE"
  exit 1
fi

if pgrep -u "$USER" -f "$SCRIPT_DIR/app/(open-source-launcher\.mjs|index\.js)" >/dev/null; then
  printf '[%s] goofishcbot already running\n' "$(date '+%F %T')" >> "$LOG_FILE"
  exit 0
fi

printf '[%s] starting goofishcbot\n' "$(date '+%F %T')" >> "$LOG_FILE"
nohup "$NODE_BIN" "$SCRIPT_DIR/app/open-source-launcher.mjs" >> "$SCRIPT_DIR/logs/runtime.log" 2>&1 &
printf '[%s] start command sent\n' "$(date '+%F %T')" >> "$LOG_FILE"
