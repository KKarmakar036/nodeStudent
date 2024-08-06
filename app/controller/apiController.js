const student=require('../model/student')
class ApiController{
    async creatStudent(req,res){
        try{
            const {name,email,phone}=req.body

            if(!(name,email,phone)){
                res.status(500).json({
                    massage:"Required Field"
                })
            }
            const namValide=(/^[A-Za-z ]{3,20}$/)
            if(name.length < 3){
                res.status(500).json({
                    massage:"Minimum 3 character"
                })
            }else if(name.length > 20){
                res.status(500).json({
                    masage:"Maximum 20 character"
                })
            }else if(!namValide.test(name)){
                res.status(500).json({
                    massage:"Only Character"
                })
            }
            const emailValide=(/^([A-Za-z0-9]+)@([a-z]{5})([/.])([a-z]{3})$/)
            if(!emailValide.test(email)){
                res.status(500).json({
                    massage:"Enter Your Cruct Email (A-Za-z0-9 @ a-z . a-z)"
                })
            }
            const phoneValide=(/^[0-9]{10}$/)
            if(!phoneValide.test(phone)){
                res.status(500).json({
                    massage:"Enter Your 10 Digite Number"
                })
            }
            const addData=new student({
                name,email,phone
            })
            const studentdata=await addData.save()
            res.status(201).json({
                massage:"StudentData",
                data:studentdata
            })
        }catch(error){
            console.log(error);
        }
    }
    async alldata(req,res){
        try{
            const studentdata=await student.find()
            res.status(200).json({
                massage:"studentData",
                total:studentdata.length,
                data:studentdata
            })
        }catch(error){
            console.log(error);
            
        }
    }
    async edit(req,res){
        try{
            const id= req.params.id
            const singleEdit=await student.findById(id)
            if(!singleEdit){
                res.status(500).json({
                    massage:"Id not match"
                })
            }else{
                res.status(200).json({
                    massage:"Id match",
                    data:singleEdit
                })
            }
        }catch(error){
            console.log(error);
        }
    }
    async update(req,res){
        try{
            const id=req.params.id
            const idUpdate=await student.findByIdAndUpdate(id,req.body)
            if(!idUpdate){
                res.status(500).json({
                    massage:"Id wrong"
                })
            }else{
                res.status(200).json({
                    massage:"update susccese",
                    data:idUpdate
                })
            }
        }catch(error){
            console.log(error);
        }
    }
    async delete(req,res){
        try{
            const id=req.params.id
            const dataDeiete=await student.findByIdAndDelete(id,req.body)
            if(!dataDeiete){
                res.status(500).json({
                    massage:"id wrong"
                })
            }else{
                res.status(200).json({
                    massage:"Delete susccese"
                })
            }
        }catch(error){
            console.log(error);
        }
    }
}
const apiController=new ApiController()
module.exports=apiController