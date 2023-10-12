FROM node:18-bullseye AS builder

WORKDIR /usr/app

COPY package.json ./
COPY tsconfig.json ./

RUN yarn

COPY . .

RUN yarn build

FROM node:lts-alpine AS runner

WORKDIR /app
# Copy rest of the code to container
COPY --from=builder /usr/app/node_modules /app/node_modules
COPY --from=builder /usr/app/dist /app

EXPOSE 3000

CMD ["node", "/app/app.js"]