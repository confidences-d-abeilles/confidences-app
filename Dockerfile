FROM node:12

ARG NODE_ENV

COPY . .

RUN if [ "$NODE_ENV" = "staging" ] ; then mv .env.staging .env.production ; else rm .env.staging ; fi;

RUN yarn

ENV NODE_ENV production

RUN yarn run build

EXPOSE 5000

CMD yarn start
