FROM node:14.17.3

# Create app directory
WORKDIR /usr/src/app

ADD package.json package-lock.json ./

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 5000

CMD [ "node", "app.js" ]