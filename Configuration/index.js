require("dotenv").config()
const express = require('express');
const app = express();

// app.get('/', (req,res) => {
//     res.send('example')
// });

// app.listen(3000, function(){
//     console.log('Code Jalan localhost:3000')
// });





//!External Configuration
app.get("/", (req, res) => {
    let status = process.env.PORT == 8000? "Production" : "Development"
    res.send(`Hello ! anda masuk sebagai : ${status} App`);
});

app.listen(process.env.PORT, function(){
    console.log(`Anda menggunakan port : ${process.env.PORT}`)
});