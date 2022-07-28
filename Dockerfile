FROM node:7
WORKDIR /app
COPY package.json
RUN npm install
COPY ./app
CMD node server.js
Expose 9000
