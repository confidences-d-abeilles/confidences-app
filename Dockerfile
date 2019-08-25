FROM node:latest

ARG NODE_ENV

COPY . .

RUN yarn

RUN NODE_ENV=$NODE_ENV yarn run build

EXPOSE 5000

CMD NODE_ENV=$NODE_ENV yarn start
