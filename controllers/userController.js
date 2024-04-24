const Data = require('../data/data')

const cityModel = require('../models/cityModel')

// const getAllUserDetail = (request, response) => {
//    response.status(200).send(Data)
// }

const getAllUserDetail = async (request, response) => {//external dependency so try-catch is used.
   try {
      const cities = await cityModel.find()          //until this operation completes no response is send=>await purpose
      if(cities.length===0)
      {
         const initialCities=await cityModel.insertMany(Data)
      }
      response.status(200).json(cities)
   }
   catch (error){
      response.status(500).send({ message: error.message })
   }
}

// const getExpectedUserDetailById = (request, response) => {
//    const expectedId = request.params.id
//    const expectedIdName = Data.find(iterator => iterator.id === parseInt(expectedId))
//    if (expectedIdName) {
//       return response.status(200).send(expectedIdName)
//    }
//    else {
//       return response.status(404).send({ message: `${expectedId} doesn't seem to be valid data` })
//    }
// }

const getExpectedUserDetailById = async(request, response) => {
     const expectedId = request.params.id
    try{
const id=await cityModel.findOne({id:expectedId})
return response.status(200).json(id)
    }
    catch(error){
      return response.status(500).send({message:error.message})
    }

}


// const getExpectedUserDetailByName = (request, response) => {
//    const expectedCity = (request.params.city).toLowerCase()
//    const expectedCityName = Data.find(iterator => iterator.city.toLowerCase() === expectedCity)
//    if (expectedCityName) {
//       return response.status(200).send(expectedCityName)
//    }
//    else {
//       return response.status(404).send({ message: `${expectedCity} doesn't seem to be valid data` })
//    }
// }

const getExpectedUserDetailByName =async (request, response) => {
       const expectedCity = request.params.city
       try{
         const name=await cityModel.findOne({city:expectedCity})
         return response.status(200).json(name)
             }
             catch(error){
               return response.status(500).send({message:error.message})
             }
}

const addUserDetail = (request, response) => {
   const addCity = request.body
   const addPincode = request.body.pincode
   console.log(addCity)
   response.status(200).send("Data received successfully!")
}

const postCityData = async (request, response) => {
   const newCity = request.body
   try {
      const existingCity = await cityModel.findOne({ pincode: newCity.pincode })
      if(existingCity)
      {
         return response.status(409).send({message:`A city with pincode ${newCity.pincode} already exists`})   //409-conflict ; 400series-client error
      }
      const insertedCity=await cityModel.create(newCity)
      return response.status(200).send(insertedCity)
   }
   catch (error) {
return response.status(500).send({message:error.message})
   }
}
module.exports = { getAllUserDetail, getExpectedUserDetailById, getExpectedUserDetailByName, addUserDetail ,postCityData}