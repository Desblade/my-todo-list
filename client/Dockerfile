FROM node:19 as build

WORKDIR /usr/src/app

COPY package.json ./
RUN npm i

COPY . .
RUN npm run build

FROM nginx

COPY --from=build /usr/src/app/build /usr/share/nginx/html
