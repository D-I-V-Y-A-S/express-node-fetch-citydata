require('dotenv').config()            //dev dependency 
const mongoose=require('mongoose')    //dependency

const express=require('express')
const app=express()

// PORT=3500
const PORT=process.env.PORT                      
 //if port needs changes can be made in [.env] no need of modifying in code.

 mongoose.connect(process.env.DB_URL)
const db=mongoose.connection
db.on('error',(errorMessage)=>console.log(errorMessage))                           //epola error varuthoo apolam log panum
db.once('open',()=>console.log("connect to db successfully"))                     //open aarapo one time sona pothum

const cityData=require('./routes/userRouter')

app.get('/',(request,response)=>
{
    response.status(200).send({"message":"Hi!!"})
})

app.use(express.json())
app.use('/api/v1',cityData)

app.listen(PORT,console.log(`Server started running at http://localhost:${PORT}`))

// flow is app.js->router->controller->data


//process.env object provides access to the user's environment variables.
//.on(eventName, listener)