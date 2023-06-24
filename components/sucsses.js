import React from 'react'
import {BiCheck} from 'react-icons/bi'
const SuccessMessage = ({message}) => {
    console.log('message')
  return (
    <div className='success container mx-auto'>
        <div className='flex justify-center border border-yellow-200 bg-yellow-400  w-1/2 rounded-md mx-auto text-gray-800 my-4 py-2 text-md  text-center '>
        {message} <BiCheck size={25} color='green' />
        </div>
    </div>
  )
}

export default SuccessMessage