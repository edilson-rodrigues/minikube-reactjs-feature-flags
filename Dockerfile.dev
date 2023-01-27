FROM node:16.14.0-alpine3.15 as dev

WORKDIR /code

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

RUN rm -f yarn.lock

COPY . .

CMD ["yarn", "start"]