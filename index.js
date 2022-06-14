// Initial configuration
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const routes = require('./controllers/routeController')


// ======== Allow CORS ========== 
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.FRONT_URL);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    app.use(cors());
    next();
  });
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


