#!/bin/bash
set -e

mkdir /etc/mywebapp
cp config.json /etc/mywebapp/

chown root:app /etc/mywebapp/config.json
chmod 640 /etc/mywebapp/config.json
chmod 750 /etc/mywebapp

echo "CONFIG SCRIPT DONE"