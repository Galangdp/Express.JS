require("dotenv").config();
const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const indexRoute = require("./Routes/index")
const userRoute = require("./Routes/user")


//Disini untuk routing

app.use(
    bodyParser.json(),
    (req, res, next) =>{
        res.header("content-type", "application/json");
        next()
    },
    indexRoute,
    userRoute
)

app.listen(process.env.PORT, () =>{
    console.log(`Server berjalan di port ${process.env.PORT}`)
})
