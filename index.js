// Initial configuration
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const routes = require('./controllers/routeController')


// ======== Allow CORS ========== 
  app.options("*", cors({ origin: process.env.FRONT_URL, optionsSuccessStatus: 200 }));
  app.use(cors({ origin: process.env.FRONT_URL, optionsSuccessStatus: 200 }));
//================================

//=== Allow app to deal with JSON =====
app.use(
    express.urlencoded({extended: true})
)

app.use(express.json())

app.use('/',routes)

mongoose
.connect(`mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASSWORD}@cluster0.laibg.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
  console.log('MongoDB Connected.')
  app.listen(process.env.PORT || 8000)
})
.catch( (err) => console.log(err))
// Listen on port


