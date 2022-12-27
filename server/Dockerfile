FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install --force
COPY . .
EXPOSE 4000
CMD ["npm","start"]
