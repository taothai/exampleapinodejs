const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var _data = require('./db/db.json')

app.get('/', (req, res) => {
  res.json(_data)
})

//getdata
app.get('/get/:id', async (req,res) =>{
  var id = req.params.id
  console.log(id);
  var _sentdb = _data.filter((db)=>{
      return db.userId ===  parseInt(id)
  })
  res.json(_sentdb)
})

//postdata
app.post('/postdata', (req, res) => {

    var _data = req.body
    _data.push(_data)
    
    res.sendStatus(200)

  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


