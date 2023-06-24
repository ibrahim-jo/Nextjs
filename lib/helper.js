import { signIn } from "next-auth/react"

const BASED_URL='http://localhost:3000'

export const  getUsers = async() => {
  const response= await fetch(`${BASED_URL}/api/user`)
  const data=response.json()
  return data
  
}

//getUser

export const getUser=async(userId)=>{
  const response=await fetch(`${BASED_URL}/api/user/${userId}`)
  const json=await response.json()
  if (json) {
   
    return json 
   }
    else return {}

}
//postUser
export const createUser=async(formData)=>{
 try {
   const options={
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify(formData)
   }
   const response=await fetch(`${BASED_URL}/api/user`,options)
   const json=await response.json()
   return json

 } catch (error) {
  
 }

}

//updateUser

export const updateUser=async(userId,formData)=>{

  try {
    const options={
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(formData)
    }
    const response=await fetch(`${BASED_URL}/api/user/${userId}`,options)
    const json=await response.json()
    return json
    
  } catch (error) {
    
  }
}

//deleteUser

export const  deleteUser=async(userId)=>{
  const options={
    method:'DELETE',
    headers:{'Content-Type':'application/json'}
  }
  try {
    const res=await fetch(`${BASED_URL}/api/user/${userId}`,options)
    const json=res.json()
   return json
    
  } catch (error) {
    console.log(error)
  }
}

//signup
export  const signup=async(dataSignup)=>{
  const options={
    method:"POST",
    headers:{'content-Type':'application/json'},
    body:JSON.stringify(dataSignup)
  }
  try {
    const res=await fetch(`${BASED_URL}/api/auth`,options)
    const json=await res.json()
    console.log('auth',json)
    return json 
    
  } catch (error) {
    console.log('api',error)
  }
}

///login Auth use next-auth
 export const loginAuth=async(email,password)=>{
  
  const res=await signIn('credentials',{
    redirect:false,
    email,
    password
  })
 return res
}