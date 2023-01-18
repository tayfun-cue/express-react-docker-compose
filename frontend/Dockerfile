FROM node:18-alpine
USER node
# create work directory named app
WORKDIR /home/node/app

# copy everything in this directory to containers workdir
COPY --chown=node:node package*.json .

# install nodejs dependencies
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000

# exec form
CMD [ "npm", "start" ]
# ENTRYPOINT [ "npm", "start" ]

# shell form
# CMD npm start

