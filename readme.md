# FightDB2.0

-----------

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
- Groups
- Matchs
