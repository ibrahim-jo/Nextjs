import mongoose from 'mongoose'
const connectMongoose=async()=>{
try {
   const {connection}= await mongoose.connect(process.env.MONGO_URL) 
   
   connection.readyState==1?console.log('success_connections'):console.log('er')

} catch (error) {
    console.log(error) 
}
}

export default connectMongoose