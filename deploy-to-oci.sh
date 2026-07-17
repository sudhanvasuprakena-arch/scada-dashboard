#!/bin/bash

# BAMUL Customer Portal Deployment Script for OCI
# This script deploys both backend (Spring Boot) and frontend (Angular) to OCI instance

OCI_HOST="129.159.231.57"
OCI_USER="opc"
SSH_KEY="/home/shibashish/Downloads/ssh-key-2026-05-22.key"
APP_DIR="/opt/bamul-customer-portal"
BACKEND_JAR="customer-master-1.0.0.jar"

echo "🚀 Starting BAMUL Customer Portal deployment to OCI..."

# Function to execute remote commands
remote_exec() {
    ssh -i $SSH_KEY -o StrictHostKeyChecking=no $OCI_USER@$OCI_HOST "$1"
}

# Function to copy files
remote_copy() {
    scp -i $SSH_KEY -o StrictHostKeyChecking=no -r "$1" $OCI_USER@$OCI_HOST:"$2"
}

echo "📋 Step 1: Preparing OCI instance..."
remote_exec "sudo apt update && sudo apt install -y openjdk-11-jdk nginx"

echo "📂 Step 2: Creating application directories..."
remote_exec "sudo mkdir -p $APP_DIR/{backend,frontend,uploads,logs}"
remote_exec "sudo chown -R $OCI_USER:$OCI_USER $APP_DIR"

echo "📤 Step 3: Copying backend JAR file..."
remote_copy "./backend/target/$BACKEND_JAR" "$APP_DIR/backend/"

echo "📤 Step 4: Copying frontend build files..."
remote_copy "./dist/bamul-customer-portal/*" "$APP_DIR/frontend/"

echo "⚙️  Step 5: Setting up backend service..."
remote_exec "cat > $APP_DIR/backend/application.properties << 'EOF'
spring.application.name=bamul-customer-master
server.port=9092

# Oracle Database Configuration
spring.datasource.url=jdbc:oracle:thin:@//localhost:1521/FREEPDB1
spring.datasource.username=bamul
spring.datasource.password=Bamul2026
spring.datasource.driver-class-name=oracle.jdbc.OracleDriver
spring.datasource.hikari.maximum-pool-size=10

# Email Configuration
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=guhashibashish@gmail.com
spring.mail.password=suonkwrzquqwijkg
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

# JPA Configuration
spring.jpa.database-platform=org.hibernate.dialect.Oracle10gDialect
spring.jpa.show-sql=false
spring.jpa.hibernate.ddl-auto=none
spring.jpa.open-in-view=false

# Logging
logging.level.root=INFO
logging.file.name=$APP_DIR/logs/application.log

server.tomcat.relaxed-query-chars=|,{,},[,]
spring.mvc.dispatch-options-request=true
EOF"

echo "🔧 Step 6: Creating systemd service for backend..."
remote_exec "sudo tee /etc/systemd/system/bamul-backend.service > /dev/null << 'EOF'
[Unit]
Description=BAMUL Customer Portal Backend
After=network.target

[Service]
Type=simple
User=$OCI_USER
WorkingDirectory=$APP_DIR/backend
ExecStart=/usr/bin/java -Xms256m -Xmx512m -jar $BACKEND_JAR --spring.config.location=file:./application.properties
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF"

echo "🌐 Step 7: Configuring Nginx for frontend..."
remote_exec "sudo tee /etc/nginx/sites-available/bamul-customer-portal > /dev/null << 'EOF'
server {
    listen 80;
    server_name _;
    root $APP_DIR/frontend;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:9092;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        
        # Handle CORS
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With' always;
        
        if (\$request_method = 'OPTIONS') {
            return 204;
        }
    }
}
EOF"

echo "🔗 Step 8: Enabling Nginx site..."
remote_exec "sudo ln -sf /etc/nginx/sites-available/bamul-customer-portal /etc/nginx/sites-enabled/"
remote_exec "sudo rm -f /etc/nginx/sites-enabled/default"

echo "🚦 Step 9: Starting services..."
remote_exec "sudo systemctl daemon-reload"
remote_exec "sudo systemctl enable bamul-backend"
remote_exec "sudo systemctl restart bamul-backend"
remote_exec "sudo systemctl restart nginx"

echo "🔍 Step 10: Checking service status..."
remote_exec "sudo systemctl status bamul-backend --no-pager"
remote_exec "sudo systemctl status nginx --no-pager"

echo "🎉 Deployment completed!"
echo ""
echo "📱 Application URLs:"
echo "   Frontend: http://$OCI_HOST"
echo "   Backend API: http://$OCI_HOST/api"
echo ""
echo "📊 Service Management:"
echo "   Backend logs: ssh -i $SSH_KEY $OCI_USER@$OCI_HOST 'sudo journalctl -u bamul-backend -f'"
echo "   Nginx logs: ssh -i $SSH_KEY $OCI_USER@$OCI_HOST 'sudo tail -f /var/log/nginx/access.log'"
echo ""
echo "🔧 Service Commands:"
echo "   Restart backend: ssh -i $SSH_KEY $OCI_USER@$OCI_HOST 'sudo systemctl restart bamul-backend'"
echo "   Restart nginx: ssh -i $SSH_KEY $OCI_USER@$OCI_HOST 'sudo systemctl restart nginx'"