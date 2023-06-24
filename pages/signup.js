import SignupForm from '/components/SignupForm'
import React from 'react'

const signup = () => {
  return (
    <div  className='container mx-auto flex flex-col  justify-center  items-center h-screen bg-indigo-50 '>
        <SignupForm />
       
    </div>
  )
}

export default signup