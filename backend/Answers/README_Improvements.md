I would make the following improvements:

## Backend

- Improve error handling - rather than just returning the row count, report when searches retuen empty results.
- Currently using http, but should use https for more secure comms.
- All running off localhost, so would want to deploy to a more secure server.

## Frontend

- Add buttons for add/update to make it more intuitive with how to use the frontend.
- Put list of todos in a scrollable window and limit page size.
- Make todos searchable - tags, keyword searches.
- Create heatmap of most used words (perhaps put into Elastic and create Kibana dashboard?).
