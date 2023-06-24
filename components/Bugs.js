import React from 'react'
import {BiError} from 'react-icons/bi'
const Bugs = ({message}) => {
    console.log('message')
  return (
    <div className='success container mx-auto'>
        <div className='flex justify-center border border-red-200 bg-red-400  w-1/2 rounded-md mx-auto text-gray-800 my-4 py-2 text-md  text-center '>
        {message} <BiError size={25} color='green' />
        </div>
    </div>
  )
}

export default Bugs