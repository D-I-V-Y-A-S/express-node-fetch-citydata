const express=require('express')
const route=express.Router()

const {getAllUserDetail,getExpectedUserDetailById,getExpectedUserDetailByName,addUserDetail,postCityData}=require('../controllers/userController')

route.get('/',getAllUserDetail)
route.get('/:id([0-9]{1})',getExpectedUserDetailById)
route.get('/:city',getExpectedUserDetailByName)
// route.post('/add',addUserDetail)
route.post('/add',postCityData)
module.exports=route
