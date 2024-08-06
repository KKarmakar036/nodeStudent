const express=require('express')
const apiController = require('../app/controller/apiController')

const Router=express.Router()

Router.post('/creat',apiController.creatStudent)
Router.get('/alldata',apiController.alldata)
Router.get('/alldata/edit/:id',apiController.edit)
Router.post('/alldata/update/:id',apiController.update)
Router.delete('/alldata/delete/:id',apiController.delete)

module.exports=Router