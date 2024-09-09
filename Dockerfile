# Use the official Node.js image from the Docker Hub
FROM node:20-alpine3.19

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 7878

# Define the command to run your application
CMD ["npm", "start"]

