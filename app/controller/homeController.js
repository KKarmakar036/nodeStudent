const student=require('../model/student')
const path=require('path')
class HomeController{
    async home(req,res){
        const alldata=await student.find()
        const mass=req.flash('massage')
        res.render('home',{
            title:"home",
            data:alldata,
            massage:mass
        })
    }
    async register(req,res){
        res.render('register'),{
            title:"register"
        }
    }
    async userdata(req,res){
        try{
            const {name,email,phone}=req.body
            const allData=new student({
                name,email,phone
            })
            if(req.file){
                allData.photo=req.file.path
            }
            const studentdata=await allData.save()
            if(studentdata){
                req.flash('massage',"Data added successfully")
                res.redirect('/')
            }else{
                res.redirect('/register')
            }
            
        }catch(error){
            console.log(error);
        }
    }
    async edit(req,res){
        try{
            const id=req.params.id
            const singleEdit=await student.findById(id)
            res.render('registeredit',{
                title:"registeredit",
                data:singleEdit
            })
        }catch(error){
            console.log(error);
        }
    }
    async update(req,res){
        try{
            const id=req.params.id
            const siudentUpdate=await student.findByIdAndUpdate(id,req.body)
            if(siudentUpdate){
                req.flash('massage',"Data Update successfully")
                res.redirect('/')
            }else{
                res.redirect('/register')
            }
        }catch(error){
            console.log(error);
        }
    }
    async delete(req,res){
        try{
            const id=req.params.id
            const studentDelete=await student.findByIdAndDelete(id)
            if(studentDelete){
                req.flash('massage',"No Data Found")
                res.redirect('/')
            }else{
                res.redirect('/register')
            }
        }catch(error){
            console.log(error);
        }
    }
}
const homeController=new HomeController()
module.exports=homeController