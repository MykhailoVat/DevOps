#!/bin/bash
set -e

cp mywebapp /etc/nginx/sites-available/
ln -s /etc/nginx/sites-available/mywebapp /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
systemctl reload nginx
