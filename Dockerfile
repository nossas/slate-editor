FROM node:latest
MAINTAINER Nossas <tech@nossas.org>

WORKDIR /usr/src/app

COPY . .
RUN yarn

CMD ["yarn", "start"]
