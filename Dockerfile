FROM node:latest
RUN mkdir /client-landing-page

WORKDIR /landing-page
COPY package.json /client-landing-page
RUN npm install

COPY . .
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]