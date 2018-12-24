const express    = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const api        = require('./routes/api')
const PORT = 3001
const app = express()

app.use(cors())
app.use(bodyParser.json())


app.use('/api',api)
app.get('/', function (req, res) {
  res.send("Hello I am here :3")
})

app.listen(PORT, function () {
  console.log("Server is running on: "+ PORT)
})
