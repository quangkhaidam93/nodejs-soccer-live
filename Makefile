dev:
	docker-compose -f docker-compose.dev.yml up
dev-with-new-build:
	docker-compose -f docker-compose.dev.yml up --build
prod:
	docker-compose up
migration-up:
	npm i -g sequelize-cli
	npm run migrate-up
migration-down:
	npm i -g sequelize-cli
	npm run migrate-down
migration-down-all:
	npm i -g sequelize-cli
	npm run migrate-down-all
# migration-prepare:
# 	apt-get install postgresql
# 	./scripts/wait_for_postgres.sh 127.0.0.1 sequelize db:migrate
