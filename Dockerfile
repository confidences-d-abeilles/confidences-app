FROM node:latest

ARG NODE_ENV

COPY . .

RUN if [ "$NODE_ENV" == "staging" ] ; then mv .env.staging .env.production ; else rm .env.staging ;

RUN yarn


RUN yarn run build

EXPOSE 5000

CMD yarn start
