#!/bin/bash
set -e

apt update
apt install nginx nodejs npm postgesql

sudo -u postgres psql -c "CREATE DATABASE app;"
sudo -u postgres psql -c "CREATE USER myuser WITH PASSWORD 'pass';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE app TO myuser;"
