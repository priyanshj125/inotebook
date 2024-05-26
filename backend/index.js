
const connectToMongo = require('./db');
var cors = require('cors')
const connectDb = require('./db.js');
const express = require('express')
connectToMongo();
const app = express() 
const port = 5000 ;
// var app = express()
connectDb();
const User = require('./modules/User.js')
const Notes = require('./modules/Notes.js')

app.use(cors(
 { origin:{},
  methods:["POST","GET","DELETE"],
  Credentials:true}
))
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
// app.use('routes/notes',require('./routes/notes'))
app.use('/api/notes', require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('Hello World!')
}) 
app.listen(port, () => {
  console.log(`Example listin at http://localhost:${port}`)
})
