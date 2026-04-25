FROM node:18-alpine

WORKDIR /mywebapp

# hadolint ignore=DL3018
RUN apk add --no-cache jq bash postgresql-client

COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT ["/mywebapp/init_db/docker_migrate.sh"]
CMD ["node", "src/server/server.js"]