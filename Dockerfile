FROM node:14.19-alpine
WORKDIR /usr/app
COPY package.json .
RUN npm i
RUN npm i -g sequelize-cli
COPY . .
EXPOSE 8080