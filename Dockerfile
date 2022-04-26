FROM node

WORKDIR /map-app
RUN npm install http fs socket.io onoff

