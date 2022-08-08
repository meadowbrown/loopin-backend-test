const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./queries')
const port = 3000

app.use(express.json())

app.use(cors({origin: '*'}))

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/todos/', db.getTodos)
app.get('/todos/:id', db.getTodoById)
app.post('/todos/', db.createTodo)
app.put('/todos/:id', db.updateTodo)
app.delete('/todos/:id', db.deleteTodo)
