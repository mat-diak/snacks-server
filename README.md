This is a rest API that serves https://snacks-tidbits.herokuapp.com/

## Access on heroku

https://snacks-server.herokuapp.com/

## Routes

GET api/tasks - list of all tasks
POST api/tasks - creates a task
PUT api/tasks/:id - updates a task
DELETE api/tasks/:id - deletes a task

## To run locally:

1. Create .env file from template.env
2. Run in command line:

```
  > npm install
```

To access on http://localhost:5000/ :
```
  > npm run server
```

## Technologies used:
Express, MongoDB