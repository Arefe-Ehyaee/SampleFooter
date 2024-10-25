FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE 3000

RUN yarn run build

CMD ["yarn", "start"]