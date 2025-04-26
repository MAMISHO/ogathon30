FROM node:18-alpine

WORKDIR /app

ARG NODE_ENV=prod
ENV NODE_ENV=${NODE_ENV}


COPY package*.json ./
RUN npm install


COPY . .


RUN npm run build

EXPOSE 8080 

CMD ["npm", "run", "start:prod"]