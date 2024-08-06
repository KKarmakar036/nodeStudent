const mongoose=require('mongoose')

const counnectDB=async () => {
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log("Connect Mongoose");
    }catch(error){
        console.log(`Error mongoose ${error}`);
        
    }
}
module.exports=counnectDB