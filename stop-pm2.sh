#!/bin/bash
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"
NODE_BIN="node"
[ -x "$SCRIPT_DIR/node/bin/node" ] && NODE_BIN="$SCRIPT_DIR/node/bin/node"
if [ -f "$SCRIPT_DIR/node_modules/pm2/bin/pm2" ]; then
  "$NODE_BIN" "$SCRIPT_DIR/node_modules/pm2/bin/pm2" stop ecosystem.config.cjs
else
  pm2 stop ecosystem.config.cjs
fi
echo "Done."
