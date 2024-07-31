# Base image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /juyo_marco_final_site

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /juyo_marco_final_site/node_modules/.bin:$PATH

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the source code
COPY . .

# Build the application
RUN yarn build

# Use the official Nginx image to serve the application
FROM nginx:alpine

# Copy the build output to Nginx's HTML directory
COPY --from=build /juyo_marco_final_site/build /usr/share/nginx/html

# Expose port 5575
EXPOSE 5575

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
