setup: prepare install db-migrate

install:
	npm install

db-migrate:
	npx knex migrate:latest

build:
	npm run build

prepare:
	cp -n .env.example .env || true

start:
	heroku local -f Procfile.dev

start-backend:
	npm start -- --watch --verbose-watch --ignore-watch='node_modules .git .sqlite'

start-frontend:
	npx webpack --watch --progress

lint:
	npx eslint .

test:
	npm test -s

testOneByOne:
	npx jest __tests__/users.test.js
	npx jest __tests__/tasks.test.js
	npx jest __tests__/statuses.test.js
	npx jest __tests__/labels.test.js
	npx jest __tests__/session.test.js
	npx jest __tests__/app.test.js

test-coverage:
	npm test -- --coverage
