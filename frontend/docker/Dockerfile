
# Dockerfile for my website - July 2025


# Sets base image
FROM node:20-alpine


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
