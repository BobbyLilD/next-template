FROM node:16.18.1-alpine

WORKDIR /app

RUN apk add --no-cache bash

ARG NEXT_PUBLIC_BACK_URL
ENV NEXT_PUBLIC_BACK_URL=${NEXT_PUBLIC_BACK_URL}

#Depends
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --frozen-lockfile

#BUILD
COPY ./public ./public/
# COPY ./pages ./pages/
COPY ./src ./src/
COPY .eslintrc.json ./
COPY next-env.d.ts ./
COPY next.config.js ./
# COPY styles.scss ./
COPY tsconfig.json ./

RUN yarn build-ci

#Команда для запуска сервера внутри контейнера
CMD [ "yarn", "global-stand" ]