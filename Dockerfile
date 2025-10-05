# Use the official Node.js 20-alpine image as a base
FROM node:20-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# --- BUILD STAGE ---
FROM base AS builder

# Install all dependencies
RUN npm ci --ignore-scripts

# Copy the rest of the source code
COPY . .

# Build the Next.js app
RUN npm run build

# --- PRODUCTION STAGE ---
FROM base AS production

# Install only production dependencies
RUN npm ci --omit=dev --ignore-scripts

# Copy the built Next.js app from the builder stage
COPY --from=builder /app/.next ./.next

# Copy public assets
COPY --from=builder /app/public ./public

# Expose port 3000
EXPOSE 3000

# The command to start the production server
CMD ["npm", "run", "start"]
