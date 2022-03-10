const express = require('express');
const app = express();

//Akan Mempelajari 3 parameter : Request, Respon, Next
app.get('/', (req, res) => {
    res.send('Hallo saya lagi belajar express')
})

app.listen(3000, function(){
    console.log('Server berjalan di localhost:3000')
})