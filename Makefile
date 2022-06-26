dev:
	docker-compose -f docker-compose.dev.yml up
dev-with-new-build:
	docker-compose -f docker-compose.dev.yml up --build
dev-down:
	docker-compose -f docker-compose.dev.yml down
dev-stop:
	docker-compose -f docker-compose.dev.yml stop
dev-down-images:
	docker-compose -f docker-compose.dev.yml down --rmi all
dev-down-volumes:
	docker-compose -f docker-compose.dev.yml down --volumes
dev-down-all:
	docker-compose -f docker-compose.dev.yml down --volumes --rmi all
prod:
	docker-compose up --detach
prod-stop:
	docker-compose stop 
prod-down:
	docker-compose down 
prod-down-images:
	docker-compose down --rmi all
prod-down-volumes:
	docker-compose down --volumes
prod-down-all:
	docker-compose down --volumes --rmi all
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
copy-ssl-configs:
	cp /etc/letsencrypt/live/atzstore.net/* ./secrets
