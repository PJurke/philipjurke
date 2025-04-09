# ===== STAGE 1: Build =====
FROM node:23-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# ===== STAGE 2: Run =====
FROM node:23-alpine AS runner

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Optional: if you use a custom server.js
# COPY --from=builder /app/server.js ./server.js

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]