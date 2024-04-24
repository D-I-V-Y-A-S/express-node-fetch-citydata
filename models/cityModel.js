const mongoose=require('mongoose')  //to create schema mongoose is imported.it will be like a json of json.ODM library.

// mongoose.Schema({key condition parameters,collection})
const citySchema=new mongoose.Schema(
    {
        id:{
            type:Number,
            required:true,
            unique:true,
            //index:true-> when order matters;so that can perform operations like sort etc.,
        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true,
            // enum:["TamilNadu","kerala","AP","Telangana"]  
        },
        pincode:{
            type:Number,
            required:true,
            unique:true,
            Min:100000,
            Max:999999,
        }
    },
    {
        collection:'city'             //already exists means it uses orelse creates a new one.
    }
)


module.exports=mongoose.model('city',citySchema)

//any data added in 'city; should follow the citySchema


// install
// 1.npm install mongoosh
// 2.npm install --save-dev dotenv









// const mongoose=require('mongoose')

// const citySchema=new mongoose.Schema()

// module.exports=mongoose.model(citySchema)