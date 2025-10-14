# ----- STEP 1: Define the base image
FROM node:22-alpine AS base


# ----- STEP 2: Install necessary packages
FROM base AS deps
WORKDIR /app

# Copy dependencies
COPY package*.json ./
RUN npm ci


# ----- STEP 3: Build the application
FROM base AS builder
WORKDIR /app

# Environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_VERBOSE=1

# Copy the dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Next.js app
RUN npm run build


# ----- STEP 4: Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# Create a user and a group for the application
RUN addgroup -S -g 1001 nodejs
RUN adduser -S -u 1001 -G nodejs nextjs

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Copy only the necessary files from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Change user to the newly created non-root user
USER nextjs

CMD ["node", "server.js"]