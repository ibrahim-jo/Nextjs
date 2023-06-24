const validate = (data) => {
    const err=[]
    
  if(data.fullName?.length<4){
    err.push({fullName:'Full Name must be at least 4 character long '})

  }
  if(data.fullName?.length>30){
    err.push({fullName:'fullName should be less than 30 character'})

  }
   if (data.password?.length<6) {
       err.push({password:'pass should be at least 6 character'})
  }
   if (data.password !==data.confirmPassword) {
    err.push({confirmPassword:'pass dont match'})
  }
  return  err
  
}

export default validate

