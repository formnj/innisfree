# This file is a template, and might need editing before it works on your project.
FROM 883424753239.dkr.ecr.ap-northeast-2.amazonaws.com/apne2-devops-base-nodejs:20.11.0-alpine3.19

# Uncomment if use of `process.dlopen` is necessary
# apk add --no-cache libc6-compat

#ENV PORT 8080
#EXPOSE 8080

ENV PORT 8080
EXPOSE $PORT

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV NPM_CONFIG_CACHE=/path/to/cache

WORKDIR /usr/src/app
COPY package.json .
RUN npm install

COPY . .
RUN npm run build

#RUN pwd
#RUN npm get cache


CMD [ "npm", "start" ]
