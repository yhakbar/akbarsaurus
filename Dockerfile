FROM node:16.3 as build

WORKDIR /app

COPY . .

RUN npm install -g npm@7.18.1 && \
    npm install && \
    npm run build

FROM nginx:1.21-alpine as web

COPY --from=build /app/build /usr/share/nginx/html

FROM build as dev

CMD ["npm", "run", "start"]
