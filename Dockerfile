# Step 1: Use a lightweight Node.js environment
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy tracking dependencies configuration files
COPY package*.json ./

# Step 4: Install both development and production dependencies
RUN npm install

# Step 5: Copy the remaining project codebase files 
COPY . .

# Step 6: Expose the port your Express backend uses
EXPOSE 5000

# Step 7: Run your application direct from the server script
CMD ["npm", "run", "dev"]