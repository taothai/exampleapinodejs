const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var _data = require('./db/db.json')


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


