# Use Node.js 23.11.0 base image
FROM node:23.11.0-alpine

WORKDIR /app
# Set working directory
COPY package*.json ./
RUN npm install 

# Copy the rest of the application code
COPY . .

RUN npm run build
##RUN npx prisma generate
EXPOSE 8080

CMD ["node","dist/main"]
