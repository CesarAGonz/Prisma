FROM node:14-alpine

RUN mkdir -p /home/node/app && chown node /home/node/app

USER node

WORKDIR /home/node/app

COPY package.json ${WORKDIR}

RUN yarn install 

COPY . {WORKDIR}

ENV HOST=0.0.0.0 PORT=4455

EXPOSE ${PORT}

CMD ["yarn", "start"]
