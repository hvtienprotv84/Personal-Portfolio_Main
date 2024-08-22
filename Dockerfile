# base image
FROM node:latest

# create & set working directory
WORKDIR /app

# copy source files
COPY package.json .
COPY package-lock.json .

# install all dependencies
RUN npm install

# copy the rest of the application
COPY . .

# build the application
RUN npm run build

# expose port 3000 for the app
EXPOSE 3000

# start the application
CMD ["npm", "start"]
