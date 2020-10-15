const express = require('express')
const app = express()
const things = require('./things.js')
const port = process.env.port || 3000

app.use('/things',things);


app.listen(port, (req,res)=>{
    console.log(`Listining port ${port}.`)
})