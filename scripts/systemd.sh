#!/bin/bash

mkdir /etc/systemd/system/mywebapp
cp mywebapp.service /etc/systemd/system/mywebapp/
cp mywebapp.socket /etc/systemd/system/mywebapp/

systemctl start mywebapp.socket
systemctl enable mywebapp.socket
