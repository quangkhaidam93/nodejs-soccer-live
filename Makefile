dev:
	docker-compose -f docker-compose.dev.yml up
dev-with-new-build:
	docker-compose -f docker-compose.dev.yml up --build
prod:
	docker-compose up --detach
migration-up:
	npm i -g sequelize-cli
	npm run migrate-up
migration-down:
	npm i -g sequelize-cli
	npm run migrate-down
migration-down-all:
	npm i -g sequelize-cli
	npm run migrate-down-all
migration-prepare:
	chmod +x /usr/app/scripts/*
	sh ./scripts/wait_for_postgres.sh db sequelize db:migrate
