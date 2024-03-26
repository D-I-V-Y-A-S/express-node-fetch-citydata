const Data = require('../data/data')

const getAllUserDetail = (request, response) => {
   response.status(200).send(Data)
}

const getExpectedUserDetailById = (request, response) => {
   const expectedId = request.params.id
   const expectedIdName = Data.find(iterator => iterator.id === parseInt(expectedId))
   if (expectedIdName) {
      return response.status(200).send(expectedIdName)
   }
   else {
      return response.status(404).send({ message: `${expectedId} doesn't seem to be valid data` })
   }
}

const getExpectedUserDetailByName = (request, response) => {
   const expectedCity = (request.params.city).toLowerCase()
   const expectedCityName = Data.find(iterator => iterator.city.toLowerCase() === expectedCity)
   if (expectedCityName) {
      return response.status(200).send(expectedCityName)
   }
   else {
      return response.status(404).send({ message: `${expectedCity} doesn't seem to be valid data` })
   }
}

const addUserDetail = (request, response) => {
   const addCity = request.body
   const addPincode = request.body.pincode
   console.log(addCity)
   response.status(200).send("Data received successfully!")
}

module.exports = { getAllUserDetail, getExpectedUserDetailById, getExpectedUserDetailByName, addUserDetail }