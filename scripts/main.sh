#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

cd "$SCRIPT_DIR"

"$SCRIPT_DIR/users.sh"
"$SCRIPT_DIR/install.sh"
"$SCRIPT_DIR/config.sh"
"$SCRIPT_DIR/systemd.sh"
"$SCRIPT_DIR/nginx.sh"
