const { pool } = require('./pool');

const getTodos = (request, response) => {
  pool.query('SELECT * FROM todos ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
}

const getTodoById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM todos WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
}

const createTodo = (request, response) => {
  const { title, completed } = request.body

  pool.query('INSERT INTO todos (title, completed) VALUES ($1, $2)', [title, completed], (error, results) => {
    if (error) {
      throw error
    }

    response.status(201).send(`Number of rows added: ${results.rowCount}`)
  })
}

const updateTodo = (request, response) => {
  const id = parseInt(request.params.id)
  const { title, completed } = request.body

  pool.query(
    'UPDATE todos SET title = $1, completed = $2 WHERE id = $3', [title, completed, id], (error, results) => {
      if (error) {
        throw error
      }

      console.log(results);
      response.status(200).send(`Number of rows updated: ${results.rowCount}`)
    }
  )
}

const deleteTodo = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM todos WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).send(`Number of rows deleted: ${results.rowCount}`)
  })
}

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
}
