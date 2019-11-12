FROM node:10

RUN echo ${REACT_APP_STRIPE_API_KEY}

ARG NODE_ENV

COPY . .

RUN if [ "$NODE_ENV" = "staging" ] ; then mv .env.staging .env.production ; else rm .env.staging ; fi;

RUN yarn install --network-timeout 1000000000

ENV NODE_ENV production

RUN env

RUN yarn run build

EXPOSE 5000

CMD REACT_APP_STRIPE_API_KEY=${REACT_APP_STRIPE_API_KEY} yarn start
