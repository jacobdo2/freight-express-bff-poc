# Express-based proof of concept for Future Freight's BFF

## Spin up
To test it out locally, simply:

## Postman
Download [Postman](https://www.postman.com/) in order to be to test out the API.

`yarn && yarn start`

## Use "Now" endpoint
[express-tasks-p4112o1yp.now.sh](express-tasks-p4112o1yp.now.sh)

## Endpoints
GET `/tasks` - retrieve a collection of tasks  
POST `/tasks` - create a new task (Request body must contain "title" and "description"  
GET `/tasks/:id` - get task by id  
PATCH `/tasks/:id` - update existing task (Request body should have at least one of the following - "title", "description", "status")  
DELETE `/tasks/:id` - delete existing task  
