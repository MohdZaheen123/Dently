const express = require('express')
const cors = require('cors')
const dbconnection= require('./database/connection')
const dotenv = require('dotenv')
const dentistRouter= require('./router/dentistRouter')
const appoinmentRouter = require('./router/appoinmentRouter')

dotenv.config()

dbconnection()
const app=express();
app.use(cors({
  origin: 'http://localhost:3000'
}));


// app.use(cors);
app.use(express.json())
app.use(dentistRouter)
app.use(appoinmentRouter)

app.listen(5000,()=>{
    console.log("Server running at port 5000")
})