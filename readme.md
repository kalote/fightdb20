# FightDB2.0

Serverless version of fightDB. All APIs hosted on AWS using serverless framework  and lambda functions.

## API

- Users
	- createUser: POST /user
	- updateUserInfo: PUT /user/info/{id}
	- updateUserSocial: PUT /user/social/{id}
	- updateUserGroups: PUT /user/groups/{id}
	- updateUserGames: PUT /user/games/{id}
	- updateUserPassword: PUT /user/password/{id}
	- deleteUser: DELETE /user/{id}
	- user: GET /user/{id}
- Games
	- createGame: POST /game
	- updateGame: PUT /game/{id}
	- deleteGame: DELETE /game/{id}
	- game: GET /game/{id}
- Groups
	- createGroup: POST /group
	- updateGroup: PUT /group/{id}
	- deleteGroup: DELETE /group/{id}
	- group: GET /group/{id}
- Matchs

## Run

### Create
```
curl -XPOST -H "Content-type: application/json" -d '{"name":"Johann BICH","gamertag":"Kalote","email":"johannbich@gmail.com","password":"testtest","gender":"male","facebook":"Johann KALOTE","twitter":"kalot3"}' 'http://localhost:3000/user'
```

### Read
```
curl -XGET -H "Content-type: application/json" 'http://localhost:3000/user/595079c7a2251a362303d2fc'
```

### Update
```
curl -XPUT -H "Content-type: application/json" -d '{"name":"Johann BICH1"}' 'http://localhost:3000/user/594c8c58108e3200012ac8b7'
```

### Delete
```
curl -XDELETE -H "Content-type: application/json" 'http://localhost:3000/user/595079c7a2251a362303d2fc'
```

## Deploy

```
sls deploy -r ap-southeast-1 -s dev
```