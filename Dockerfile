FROM node:14.15.1-alpine

RUN apk update

ADD ./app /app

WORKDIR /app

RUN yarn install

CMD yarn run start

