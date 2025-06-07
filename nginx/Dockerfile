FROM node:18-alpine AS build
WORKDIR /app
COPY frontend/package.json ./frontend/package.json
COPY frontend/tsconfig.json ./frontend/tsconfig.json
COPY frontend/vite.config.ts ./frontend/vite.config.ts
COPY frontend/src ./frontend/src
COPY frontend/index.html ./frontend/index.html
RUN cd frontend && npm install && npm run build

FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/frontend/dist /usr/share/nginx/html
