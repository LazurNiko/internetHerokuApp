FROM cypress/included:9.2.0

WORKDIR /app

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
CMD npm start
COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json
RUN npm i -D cy-verify-downloads
RUN npm install --save-dev @4tw/cypress-drag-drop
RUN npm install --save-dev cypress-file-upload

RUN npm install cypress-real-events
RUN npx cypress run
