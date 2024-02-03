# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Install Vim
RUN apt-get update && apt-get install -y vim

# Add npm global binaries directory to the PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Copy all local files to the container
COPY . .

# Expose the port that your Express.js app listens on
EXPOSE 3001

# Command to start your Express.js app
# CMD ["npx", "nodemon", "--legacy-watch", "--exec",  "node", "app.js"]
CMD ["npm", "run", "start"]
