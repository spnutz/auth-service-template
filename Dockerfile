FROM node:16-alpine

WORKDIR /app
VOLUME /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

CMD [ "yarn", "start:dev" ]