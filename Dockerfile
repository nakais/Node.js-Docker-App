# Use the official Node.js 14 image as the base image
FROM node:14-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies using npm
RUN npm install

# Copy all the files from the current project directory to the working directory inside the container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Define the command to start the application when the container starts
CMD ["node", "app.js"]
