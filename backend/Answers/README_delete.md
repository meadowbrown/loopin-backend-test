I haven't managed to change the UI for the delete, but I have put a call into frontend/services/Todo.ts for the API in my middleware.

I would suggest the delete feature would be:

- Create a delete button on the UI.
- Make this active when a todo is selected from the list.
- Grey it out when no todos are selected.
- On prtessing, call the delete service to action the request.
