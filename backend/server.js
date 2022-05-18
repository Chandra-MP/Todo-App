const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, "..", '/build')))

app.get('/', (req, res)=>
{
    res.sendFile(__dirname, '..', '/build', '/index.html')
})

app.listen(PORT || 5000, ()=>
{
    console.log('server up and running on port ', (PORT ? PORT : 5000))
})
