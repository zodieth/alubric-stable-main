FROM node:18
WORKDIR /usr/src/app
COPY . .
RUN npm install --production --ignore-scripts
RUN npm run build
EXPOSE 3000
CMD ["npm","run","start"]
