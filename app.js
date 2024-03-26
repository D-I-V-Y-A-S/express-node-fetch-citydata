const express=require('express')
const app=express()
PORT=3500

const cityData=require('./routes/userRouter')

app.get('/',(request,response)=>
{
    response.status(200).send({"message":"Hi!!"})
})

app.use(express.json())
app.use('/api/v1',cityData)

app.listen(PORT,console.log(`Server started running at http://localhost:${PORT}`))

// flow is app.js->router->controller->data