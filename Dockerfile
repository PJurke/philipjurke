FROM node:23-alpine AS base

# --- STEP 1: Install necessary packages
FROM base AS deps
WORKDIR /app

# Copy dependencies
COPY package*.json ./
RUN npm ci

# --- STEP 2: Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Next.js app
RUN npm run build

# --- STEP 3: Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy only the necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

ENV PORT=3000
EXPOSE 3000

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]