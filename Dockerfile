FROM node:latest

COPY . .

RUN yarn
RUN yarn build

EXPOSE 5000

CMD yarn start
