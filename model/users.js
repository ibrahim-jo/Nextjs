import {Schema,model,models} from 'mongoose'
const userSchema=new Schema({
    name:String,
    avatar:String,
    email:String,  
    date:String,
    status:String,
    salary:Number
})

 const Users= models.users||model('users',userSchema)
 export default Users
