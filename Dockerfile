FROM node:16.14.0-alpine3.15 AS build

WORKDIR /code

COPY . .

RUN yarn && yarn build


FROM nginx:stable-alpine AS prod

COPY --from=build /code/build /usr/share/nginx/html 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]