FROM node:10.4.1-alpine
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server/index.js"]
