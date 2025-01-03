# Use official Node.js image as a base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the 'server' directory to the container's working directory
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code from the 'server' directory
COPY server/ .

# Expose the port the app will run on
EXPOSE 8000

# Command to run the app
CMD ["npm", "start"]
