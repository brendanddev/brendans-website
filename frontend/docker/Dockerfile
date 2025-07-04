
# Dockerfile for my website
# Brendan Dileo - July 2025


# Sets base image
FROM node:20-alpine AS build


# Sets working directory inside container
WORKDIR /app


# Copies package json files into container
COPY ../package*.json ./


# Install dependencies
RUN npm install


# Copy frontend folders into the container
COPY ../ .


# Run production build
RUN npm run build


# Use nginx image for serving static files
FROM nginx:stable-alpine


# Copies build files into nginx static folder
COPY --from=build /app/dist /usr/share/nginx/html


# Replace default config with custom
COPY nginx.conf /etc/nginx/conf.d/default.conf


# Exposes port 80 outside the container
EXPOSE 80


# Starts nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

