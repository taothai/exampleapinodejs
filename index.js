const express = require('express')
const app = express()
const port = 3000

var books = require('./db/db.json')

app.get('/', (req, res) => {
  res.json(books)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})