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

    var db = req.body
    _data.push(db)
    
    res.sendStatus(200)

  })


  // put data
app.put('/putdata', (req, res) => {

  var db = req.body
  var id = req.body.userId

  //search data for index
  var items = _data.filter((db)=>{
    return db.userId ===  parseInt(id)
})

  //search indexss
   var _index = _data.indexOf(items[0])
   console.log(_index);
    //Save edit
    Object.assign(_data[_index],db)

  res.sendStatus(200)

})

  // delete data
  app.delete('/deletedata', (req, res) => {

   // var db = req.body
    var id = req.body.userId
  
    //search data for index
    var items = _data.filter((db)=>{
      return db.userId ===  parseInt(id)
  })
  
    //search indexss
     var _index = _data.indexOf(items[0])
     console.log(_index);
      //Save edit
      _data.splice(_index, 1)
  
    res.sendStatus(200)
  
  })
  

  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


