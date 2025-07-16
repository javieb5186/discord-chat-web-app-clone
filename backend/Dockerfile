# Use official Node LTS image
FROM node:20-alpine

# Set build-time environment variable (default to production)
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Conditionally install dependencies based on NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; then \
      npm ci --omit=dev; \
    else \
      npm install; \
    fi

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 8080

# Start app
CMD ["node", "src/index.js"]