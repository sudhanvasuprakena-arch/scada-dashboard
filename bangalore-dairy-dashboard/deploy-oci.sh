#!/bin/bash
# Deploy Procurement Dashboard to OCI Compute Instance on port 3000
# Target: 129.159.231.57

set -e

OCI_IP="129.159.231.57"
OCI_USER="opc"
SSH_KEY="/home/shibashish/Downloads/ssh-key-2026-05-22.key"
API_DIR="/opt/procurement-api"
SSH_OPTS="-i ${SSH_KEY} -o StrictHostKeyChecking=no"

echo "=== Deploying Procurement Dashboard to OCI ($OCI_IP) on port 8080 ==="

# 1. Copy files to OCI
echo "[1/4] Copying files..."
scp ${SSH_OPTS} -r ./api/ ${OCI_USER}@${OCI_IP}:/tmp/api/
scp ${SSH_OPTS} ./*.html ${OCI_USER}@${OCI_IP}:/tmp/

# 2. SSH and setup
echo "[2/4] Setting up on server..."
ssh ${SSH_OPTS} ${OCI_USER}@${OCI_IP} << 'EOF'
set -e

# Install Node.js if not present
if ! command -v node &> /dev/null; then
    curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
    sudo yum install -y nodejs
fi

# Install Oracle Instant Client if not present
if [ ! -d /opt/oracle/instantclient_23_4 ]; then
    sudo yum install -y libaio wget unzip
    sudo mkdir -p /opt/oracle
    cd /tmp
    wget -q https://download.oracle.com/otn_software/linux/instantclient/2340000/instantclient-basic-linux.x64-23.4.0.24.05.zip -O instantclient.zip
    sudo unzip -o instantclient.zip -d /opt/oracle/
    rm instantclient.zip
    echo '/opt/oracle/instantclient_23_4' | sudo tee /etc/ld.so.conf.d/oracle-instantclient.conf
    sudo ldconfig
fi

# Setup app
sudo mkdir -p ${API_DIR}/public
sudo cp /tmp/api/package*.json ${API_DIR}/
sudo cp /tmp/api/server.js ${API_DIR}/
sudo cp /tmp/*.html ${API_DIR}/public/
cd ${API_DIR}
sudo npm ci --production

# Create systemd service
sudo tee /etc/systemd/system/procurement-api.service > /dev/null <<SERVICE
[Unit]
Description=Procurement Dashboard
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/procurement-api
Environment=LD_LIBRARY_PATH=/opt/oracle/instantclient_23_4
Environment=PORT=3000
ExecStart=/usr/bin/node server.js
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
SERVICE

sudo systemctl daemon-reload
sudo systemctl restart procurement-api
sudo systemctl enable procurement-api

# Open firewall port 8080
sudo firewall-cmd --permanent --add-port=3000/tcp 2>/dev/null && sudo firewall-cmd --reload 2>/dev/null || true

echo "=== Done! ==="
EOF

echo ""
echo "✅ Dashboard: http://${OCI_IP}:3000/milk-dashboard.html"
echo "✅ API:       http://${OCI_IP}:3000/api/"
