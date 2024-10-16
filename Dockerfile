# Use a base image that supports multi-architecture builds
FROM --platform=$BUILDPLATFORM node:14-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY app.js ./

# Build stage for the final image
FROM --platform=$TARGETPLATFORM node:14-alpine

WORKDIR /app

# Copy built node modules and application code
COPY --from=builder /app ./

# Expose the port the app runs on
EXPOSE 4000

# Command to run the application
CMD ["node", "app.js"]
