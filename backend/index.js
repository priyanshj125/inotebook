const connectToMongo = require('./db');
const mongoose = require('mongoose');
var cors = require('cors')
const connectDb = require('./db.js');
mongoose.set('strictQuery', true); // or false, based on your preference tru

const express = require('express')
connectToMongo();
const app = express() 
const port = 5000 ;
// var app = express()     dddfdf
connectDb();
const User = require('./modules/User.js')
const Notes = require('./modules/Notes.js')

app.use(cors(
 { origin:'*',
  methods:["POST","GET","DELETE","PUT"],
  Credentials:false
}
))
// SSL options

app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
// app.use('routes/notes',require('./routes/notes'))
app.use('/api/notes', require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('backend server running at http://localhost:${port}')
}) 
app.listen(port, () => {
  console.log(`Example listin at http://localhost:${port}`)
})

