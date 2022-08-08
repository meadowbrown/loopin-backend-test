For a tagging system, I would assume the following:

- A tag is unique.
- A tag can exist on 1 or more Todos.
- A todo can have 0 or more tags.
- A todo cannot have the same tag 2 or more times.

In addition to the todos table, I'd create two further tables:

- One table (the tag table) holds the list of tags created in the database. It will have a tag ID column and a label column. I'd consteain the label column to be unique.
- One table (the join table) sits between the todos and tags tables and links the two together. It will have one column for the the todo ID and a second column for the tag ID. There will be as many rows as necessary for the number of tags associated with the todo ID.  
