FROM node:8.9.0-alpine

WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 5656
CMD npm start
