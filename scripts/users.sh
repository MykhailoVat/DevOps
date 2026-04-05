#!/bin/bash

set -e

APP_DIR="/opt/mywebapp"
GROUP="operator"

APP_USER="app"
OPERATOR="operator"
TEACHER="teacher"
STUDENT="student"

# Паролі
OPERATOR_PASS="12345678"
TEACHER_PASS="12345678"
STUDENT_PASS="student123"

DEFAULT_USER=$(awk -F: '$3 >= 1000 {print $1}' /etc/passwd)

useradd -r -s /bin/bash $APP_USER
useradd -m -g $GROUP -s /bin/bash $OPERATOR
useradd -m -s /bin/bash $TEACHER
useradd -m -s /bin/bash $STUDENT

echo "$OPERATOR:$OPERATOR_PASS" | sudo chpasswd
echo "$TEACHER:$TEACHER_PASS" | sudo chpasswd
echo "$STUDENT:$STUDENT_PASS" | sudo chpasswd

chage -d 0 $OPERATOR
chage -d 0 $TEACHER

SUDO_FILE="/etc/sudoers.d/operator"

bash -c "cat > $SUDO_FILE" <<EOF
$OPERATOR ALL=(ALL) NOPASSWD: /bin/systemctl start mywebapp
$OPERATOR ALL=(ALL) NOPASSWD: /bin/systemctl stop mywebapp
$OPERATOR ALL=(ALL) NOPASSWD: /bin/systemctl status mywebapp
$OPERATOR ALL=(ALL) NOPASSWD: /bin/systemctl restart mywebapp
$OPERATOR ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx
EOF

chmod 440 $SUDO_FILE

mkdir -p $APP_DIR
chown -R $APP_USER:$APP_USER $APP_DIR
chmod -R 750 $APP_DIR

#sudo usermod -L $DEFAULT_USER

