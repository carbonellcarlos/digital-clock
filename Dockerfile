FROM node:16-alpine

WORKDIR /src
COPY . .
RUN npm install

WORKDIR /src/client
RUN npm install
RUN npm run build

WORKDIR /src

EXPOSE 3001

CMD ["node", "./server.js"]
