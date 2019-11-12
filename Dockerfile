FROM node:10


ARG NODE_ENV
ARG REACT_APP_MONGO_URL
ARG REACT_APP_STRIPE_API_KEY

COPY . .

RUN if [ "$NODE_ENV" = "staging" ] ; then mv .env.staging .env.production ; else rm .env.staging ; fi;

RUN yarn install --network-timeout 1000000000

ENV NODE_ENV production
ENV REACT_APP_MONGO_URL "$REACT_APP_MONGO_URL"
ENV REACT_APP_STRIPE_API_KEY "$REACT_APP_STRIPE_API_KEY"

RUN echo ${REACT_APP_STRIPE_API_KEY}

RUN yarn run build

EXPOSE 5000

CMD REACT_APP_STRIPE_API_KEY=${REACT_APP_STRIPE_API_KEY} yarn start
