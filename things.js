const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send("Im things")
})

module.exports = router