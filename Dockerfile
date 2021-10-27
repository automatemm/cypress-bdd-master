FROM cypress/base:10

COPY package.json package-lock.json ./
RUN npm i
# copy Cypress tests
COPY cypress.json cypress ./
COPY cypress ./cypress

CMD ["npm", "run", "dev"]