# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.12.2
FROM node:${NODE_VERSION}-slim

LABEL fly_launch_runtime="Node.js"

# Set production environment
ENV NODE_ENV="staging"
WORKDIR app

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
ADD app app/
ADD migrations migrations/
ADD package.json package-lock.json knexfile.js ./
RUN npm ci

# Setup sqlite3 on a separate volume
RUN mkdir -p /data
VOLUME /data

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
ENV DATABASE_URL="file:///data/sqlite.db"
ENTRYPOINT node /app/app/main.js
