require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const app=express()
// PORT=3500
const PORT=process.env.PORT                      
 //port change pananuna itha touch pana venam

 mongoose.connect(process.env.DB_URL)
const db=mongoose.connection
db.on('error',(errorMessage)=>console.log(errorMessage))   
//epola error varuthoo apolam log panum
db.once('open',()=>console.log("connect to db successfully"))
//open aarapo one time sona pothum


const cityData=require('./routes/userRouter')

app.get('/',(request,response)=>
{
    response.status(200).send({"message":"Hi!!"})
})

app.use(express.json())

app.use('/api/v1',cityData)

app.listen(PORT,console.log(`Server started running at http://localhost:${PORT}`))

// flow is app.js->router->controller->data

