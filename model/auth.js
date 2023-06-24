import {Schema,model,models} from 'mongoose'

const authSchema= new Schema({
    email:{type:String,
        required:[true,'email is required']
    },
    fullName:{type:String,
        required:[true,'inter the name']},
    password:{
        type:String,
        required:[true,'password required']
    }
})

const Auth=models.auth || model('auth',authSchema)
export default Auth