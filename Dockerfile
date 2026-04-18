FROM node:18-alpine

WORKDIR /mywebapp

RUN apk add --no-cache jq bash postgresql-client

COPY . .

ENTRYPOINT ["/mywebapp/init_db/docker_migrate.sh"]
CMD ["node", "src/server/server.js"]