FROM node:20-alpine3.19
WORKDIR /BudgetBee/
COPY package.json package-lock.json /BudgetBee/
COPY . /BudgetBee/

EXPOSE 3000

RUN npm install
CMD ["npm", "start"]
