const users = [
    {
        id : 1,
        nama : "alan",
        kelas : "RPL"
    },
    {
        id : 2,
        nama : "nnta",
        kelas : "SMP"
    },
    {
        id : 3,
        nama : "february",
        kelas : "22-2-22"
    }
]
const express = require('express')
const bodyParser = require ('body-parser')
const router = express.Router()

//Get all user
router.get("/user", (req, res, next) => {
    res.send({users})
})

//Get user by:id
router.get("/user/:id", (req, res, next) => {

    const id = req.params.id

    for(let i = 0; 1 < users.length; i++){

        let user = users[i]

        //Ini akan mencari data yang sesuai dengan id nya
        //Skenarionya dia aan mengulang id nya dan akan mengirim data jika ada yang sesuai
        if(user.id === parseInt(id)){
            res.send(user)
            return next(router)
        }
    }
    //Jika id nya ga ada
    res.send({
        error: "user not found"
    })
})

module.exports = router