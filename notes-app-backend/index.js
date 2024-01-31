const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT
const bodyParser = require('body-parser')
const connectDB = require('./config/connectDB') 
const notes = require('./controllers/notes')
connectDB()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
const corsOptions = {
  origin:'*',
  Credentials: true,
  optionSuccessStatus: 200,
}
app.use(express.json())
app.use(cors())

app.use('/notes', notes)

app.listen(port, () => console.log(`Port is running on ${port}`))
