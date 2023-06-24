import React from 'react'
import {AiTwotoneEyeInvisible} from 'react-icons/ai'
const InputField = ({type,name,placeholder,onChange,label,error}) => {
  return (
    <div>
    <label  className='block text-base mb-2' >
      {label}
      </label>
     <input type={type} name={name} 
     onChange={onChange}
     required
      className='border w-full text-base px-3 py-2 rounded-md focus:outline-none focus:border-gray-600 focus:ring-0'
     placeholder={placeholder} /> 
     <span className='text-red-400'>{error}</span> 
 </div>
  )
}

export default InputField