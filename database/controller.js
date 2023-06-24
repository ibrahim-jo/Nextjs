//**controller */
import Users from "/model/users"
import Auth from "/model/auth"
import { compare,hash } from "bcryptjs"
//get:localhost:3002/api/user
export const getUser=async(req,res)=>{
    try {
        const users=await Users.find({})
       // !users?res.status(404).json({error:'no found data'}):
        res.status(200).json(users) 
    } catch (error) {
      res.status(404).json({error:'Error while Fetching Data'}) 
    }

}

//post:localhost:3000/api/user

 export const postUser=async(req,res)=>{
    const formData=req.body

  try {
    if (!formData){
     res.status(404).json({error:'no formData'}) 
    }
    else{
        const data=await Users.create(formData)
        res.status(200).json(data)

    }

  } catch (error) {
     res.status(404).json(error)
  }
 }


 //put:localhost:3002/api/user/id
 export const putUser=async(req,res)=>{
    const {id}=req.query
    const dataForm=req.body
    console.log(dataForm)
    try {
        if (dataForm && id) {
     const update=  await Users.findByIdAndUpdate(id,dataForm)
      res.status(200).json(update)
        } else {
           res.status(404).json({error:'while update ....'}) 
        }
      
    } catch (error) {
        res.status(404).json(error)
    }
 }
 //delete

 export const deleteUser=async(req,res)=>{
    const {id}=req.query
 try {
    if(id){
        const user=await Users.findByIdAndDelete(id)
        return res.status(200).json({delete:user})
    }
    else{
        return res.status(404).json({error:'error while selected user'})

    }
    
 } catch (error) {
      res.status(404).json(error)
 }
 }
 //get singleUser:localhost:3002/api/user/id

 export const getSingleUser=async(req,res)=>{
    const {id}=req.query
    console.log('single',id)
    try {
        const singleUser=await Users.findById(id)
        res.status(200).json(singleUser)
    } catch (error) {
        res.status(404).json(error)
    }

 }
//////for Auth users-signup
export const signup=async(req,res)=>{
    const {email,password,fullName}=req.body
        console.log(email)
    try {
        
        const parson=await Auth.findOne({email})
        console.log('person',parson)
        if(parson){
            res.status(400).json({error:'user is exists'})
        }
        else{
            console.log('pass', password)
            if(password.length<6)
            res.status(409).json('passwordError')

            const hashPassword= await hash(password,12)
            const client= await Auth.create({email,fullName,password:hashPassword})
            res.status(201).json({success:true,client})

        }
        
    } catch (error) {
        res.status(409).json(error)
    }

}

