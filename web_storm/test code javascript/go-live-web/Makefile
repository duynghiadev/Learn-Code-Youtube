bash:
	docker-compose run app bash;
app:
	docker-compose -f docker-compose.yml down; docker-compose run --service-ports app;
deploy:
	chmod u+x ./deploy.sh; ./deploy.sh;
build:
	docker-compose build app;
install:
	yarn;
dev:
	yarn local:dev;