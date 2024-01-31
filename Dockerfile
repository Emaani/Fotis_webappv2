# Develop stage
FROM node:16.8.0 as develop-stage

WORKDIR /app

RUN npm install -g npm@9.8.1

COPY package*.json ./
RUN npm install

COPY . .

# Build stage
FROM develop-stage as build-stage

RUN npm run build

EXPOSE 80

ENV PORT 80

CMD ["npm", "start"]
