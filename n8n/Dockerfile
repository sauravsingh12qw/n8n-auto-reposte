FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Install chromium dependencies for Puppeteer
RUN apt-get update && apt-get install -y \
  chromium \
  ffmpeg \
  python3 \
  && rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

CMD ["node", "index.js"]
