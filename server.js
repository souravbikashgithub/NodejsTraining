const express = require('express')
const mongoose= require('mongoose')
const app = express()
const port = 3000


const MongoConnctionString= 'mongodb://localhost:27017'

mongoose.connect(MongoConnctionString).then(() => {console.log('DB connected')}).catch((error) => {
  console.log(error)
})

