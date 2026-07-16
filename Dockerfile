FROM node:18-slim

# Install Oracle Instant Client
RUN apt-get update && apt-get install -y libaio1 wget unzip && \
    wget https://download.oracle.com/otn_software/linux/instantclient/2340000/instantclient-basic-linux.x64-23.4.0.24.05.zip -O /tmp/instantclient.zip && \
    unzip /tmp/instantclient.zip -d /opt/oracle && \
    rm /tmp/instantclient.zip && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

ENV LD_LIBRARY_PATH=/opt/oracle/instantclient_23_4

WORKDIR /app

COPY api/package*.json ./
RUN npm ci --production

COPY api/server.js ./
COPY *.html ./public/

EXPOSE 3001

CMD ["node", "server.js"]
