const express = require('express')
const bodyParser = require ('body-parser')
const router = express.Router();

//Route index dengan method GET
router.get("/", (req, res, next) => {
    res.send('byee')
})

//Route index method POST
router.post(
    "/", bodyParser.json(),
    bodyParser.urlencoded({extended:true}),
    (req, res, next) =>{
        res.send(req.body)
    }
)

//Route index method delete
router.delete("/:id", (req, res, next) => {
    res.send(`Data dengan id ${req.params.id} berhasil di hapus`)
})

router.delete("/", (req, res, next) => {
    res.send(`tidak dapat menghapus, karena anda belum memasukan ID`)
})

module.exports = router