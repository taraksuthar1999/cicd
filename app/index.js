const express = require('express')
const app = express()
const PORT = process.env.PORT || 3333
app.get('/',(req,res)=>{
    res.status(200).sendFile('./index.html',{root:__dirname})
})
app.listen(PORT,()=>{
    console.log(`server spinning on port: ${PORT}`)
})