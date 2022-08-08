import { exampleTodos, Todo } from "../models/Todo";

/**
 * This is a fake service that returns a list of todos.
 * As part of this test we'd like you to remove the exampleTodos function
 * and replace it with a real service.
 *
 * @returns {Todos}
 */
export const getTodos = async (): Promise<Todo[]> => {
  return fetch("http://localhost:3000/todos")
    .then((r) => r.json())
    .catch((e) => console.log(e));
};

export const updateTodo = async (todo: Todo): Promise<void> => {
  const url = 'http://localhost:3000/todos/' + todo.id

  return fetch(url, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((r) => r.json())
    .catch((e) => console.log(e));
};

export const addTodo = async (todo: Partial<Todo>): Promise<void> => {
  return fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((r) => r.json())
    .catch((e) => console.log(e));
};

export const deleteTodo = async (todo: Todo): Promise<void> => {
  const url = 'http://localhost:3000/todos/' + todo.id

  return fetch(url, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .catch((e) => console.log(e));
};

