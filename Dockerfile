# FROM node:14.14.0-alpine as builder
FROM node:20-alpine3.19 as builder

WORKDIR /app/frontend/

# RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# USER appuser

COPY . /app/frontend/

RUN npm install react-scripts -g --force

COPY package.json /app/frontend/

RUN npm install --force

COPY . /app/frontend

# RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# USER appuser

# docker mount the volumes as root on linux system and ubuntu so use this below line
# RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# RUN mkdir node_modules/.cache && chmod -R 744 node_modules/.cache

# RUN mkdir node_modules/.cache && chown -R appuser:appgroup node_modules/.cache

# USER appuser

CMD ["npm", "start"]
