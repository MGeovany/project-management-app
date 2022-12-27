FROM node:lts
WORKDIR /app
COPY package.json .
RUN npm install --force
COPY . .
EXPOSE 80
CMD ["npm","start"]
