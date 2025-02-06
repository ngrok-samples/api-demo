# Use a base image that supports multi-architecture builds
FROM --platform=$BUILDPLATFORM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy the rest of the application code
COPY . ./

# Build stage for the final image
FROM --platform=$TARGETPLATFORM node:20-alpine

WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app ./

# Expose the port the app runs on
EXPOSE 4000

# Set a non-root user for better security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Command to run the application
CMD ["node", "app.js"]
