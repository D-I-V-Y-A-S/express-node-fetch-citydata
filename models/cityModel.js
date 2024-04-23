const mongoose=require('mongoose')

const citySchema=new mongoose.Schema(
    {
        id:{
            type:Number,
            required:true,
            unique:true,
            //index:true-> when order matters,can perform operations like sort etc.,
        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true,
            enum:["TamilNadu","kerala","AP","Telangana"]
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
        collection:'city'                                     //already exists mean it uses orelse creates a new one.
    }
)


module.exports=mongoose.model('city',citySchema)


//any data added in 'city; should follow the citySchema









// const mongoose=require('mongoose')

// const citySchema=new mongoose.Schema()

// module.exports=mongoose.model(citySchema)