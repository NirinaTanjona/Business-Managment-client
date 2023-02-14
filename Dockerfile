FROM node:16.10.0-alpine

# Create app directory and copy source
RUN mkdir -p /app
WORKDIR /app
COPY . .

# Install app dependencies
RUN yarn global add react-scripts
RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]