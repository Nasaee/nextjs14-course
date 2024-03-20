FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

# copy all files
COPY . . 

RUN npm run build

# copy next folder
COPY .next ./.next

CMD ["npm", "run", "dev"]