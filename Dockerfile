FROM node:18-alpine

WORKDIR /app

# RUN apk update && apk upgrade
# RUN apk add git

# COPY ./package*.json /app/

RUN rm -rf node_modules

COPY . /app/

RUN npm install


# CMD ["npm", "run", "dev", "--", "--port", "8000"]


# ENV PATH ./node_modules/.bin/:$PATH
