FROM node:18.14.2

WORKDIR /app

COPY ["package.json","yarn.lock","./"]

RUN yarn

COPY . .

EXPOSE 3002

CMD ["yarn", "dev"]

