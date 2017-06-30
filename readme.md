# FightDB2.0

Serverless version of fightDB. All APIs hosted on AWS using serverless framework  and lambda functions. ReactJS Frontend hosted on AWS S3. 

## Architecture

- AWS CloudFront
- AWS S3 (frontend)
- AWS ApiGateway (backend)
- AWS Lambda
- AWS DynamoDB
	- fightdb_games (store games & characters)
	- fightdb_users_profile (store user info & favorite games / chars)
	- fightdb_matchs (store matchs)
- AWS Cognito (for users signin & signup)

## Folder structure

```
fightdb2/
|_ frontend/ (reactJS app)
|_ games/ (games API)
|_ users/ (users profile API) 

```

## API

- Users_profile
	- create: POST /user
	- update: PUT /user/info/{id}
	- delete: DELETE /user/{id}
	- get: GET /user/{id}
- Games
	- create: POST /games
	- update: PUT /games/{id}
	- delete: DELETE /games/{id}
	- get: GET /games/{id}
	- list: GET /games
- Matchs

## Deploy

```
cd games && sls deploy -r ap-southeast-1 -s prod
cd users && sls deploy -r ap-southeast-1 -s prod
cd frontend && npm run deploy
```