FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Set NODE_ENV to 'development'
ENV NODE_ENV=development

# Start the app using npm
CMD ["npm", "run", "start"]