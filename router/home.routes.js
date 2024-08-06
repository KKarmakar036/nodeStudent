const express=require('express')
const homeController = require('../app/controller/homeController')
const uploadProduct = require('../app/helper/imageUpload')

const Router=express.Router()

Router.get('/',homeController.home)
Router.get('/register',homeController.register)
// no page
Router.post('/userdata',uploadProduct.single('photo'),homeController.userdata)
Router.get('/registeredit/:id',homeController.edit)
Router.post('/update/:id',homeController.update)
Router.get('/delete/:id',homeController.delete)


module.exports=Router