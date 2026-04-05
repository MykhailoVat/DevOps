#!/bin/bash
set -e

apt update
apt upgrade -y
apt install -y nginx nodejs npm postgresql

sudo -u postgres psql -c "CREATE DATABASE app;"
sudo -u postgres psql -c "CREATE USER myuser WITH PASSWORD 'pass';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE app TO myuser;"

echo "INSTALL SCRIPT DONE"

