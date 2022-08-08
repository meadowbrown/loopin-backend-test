I didn't get around to hooking up a simple test suite. Instead, I used curl to call the API and checked within Postgres that the CRUD operations were working.

With regards these curl commands, I had already pre-populated the database with one record:

- Get all records: curl http://localhost:3000/todos
- Get first record: curl http://localhost:3000/todos/1
- Insert a record: curl -H "content-type:application/json" -d '{"title":"This is another record","completed":"false"}' http://localhost:3000/todos
- Update a record: curl --request PUT -H "content-type:application/json" -d '{"title":"This is another record","completed":"true"}' http://localhost:3000/todos/2
- Delete a record: curl --request DELETE http://localhost:3000/todos/1

I've returned boundary cases as 200 since Postgres doesn't seem to report these as bad actions:

- No record to update (return 0 record count): curl --request PUT -H "content-type:application/json" -d '{"title":"This is another record","completed":"true"}' http://localhost:3000/todos/200
- No record to delete (return 0 record count): curl --request DELETE http://localhost:3000/todos/100
- No record to retrieve (return empty list): curl http://localhost:3000/todos/200
- Try to insert non boolean value (returns error): curl -H "content-type:application/json" -d '{"title":"This is another record","completed":"bananas"}' http://localhost:3000/todos
- Add empty todo (record created with null fields): curl -H "content-type:application/json" -d '{}' http://localhost:3000/todos
