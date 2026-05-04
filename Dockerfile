# Use official Node image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build TypeScript
RUN npm run build

# Expose the port Fly.io will use
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
