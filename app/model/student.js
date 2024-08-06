const mongoose=require('mongoose')
const {Schema}=mongoose

const studentShema=new Schema({
    name:{
        type:String,
        required:[true,"name required field"]
    },
    email:{
        type:String,
        required:[true,"email required field"]
    },
    phone:{
        type:Number,
        required:[true,"phone required field"]
    },
    photo:{
        type:String,
        default:"image"
    }
})
const studentModel=mongoose.model('student',studentShema)
module.exports=studentModel