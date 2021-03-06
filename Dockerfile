FROM node:10.12.0-alpine as build-stage
 WORKDIR /app
 COPY package*.json ./
 RUN npm install
 COPY . .
 RUN npm run build

 FROM nginx:1.15.5-alpine as production-stage
 COPY --from=build-stage /app/dist /usr/share/nginx/html
 CMD ["nginx", "-g", "daemon off;"]