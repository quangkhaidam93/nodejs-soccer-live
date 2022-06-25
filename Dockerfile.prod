FROM node:14.19-alpine
WORKDIR /usr/app
COPY package.json .
RUN npm i
COPY . .
RUN npm i -g nodemon
