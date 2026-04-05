#!/bin/bash

mkdir /etc/systemd/system/mywebapp
cp mywebapp.service /etc/systemd/system/
cp mywebapp.socket /etc/systemd/system/

systemctl start mywebapp.socket
systemctl enable mywebapp.socket
