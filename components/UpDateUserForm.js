import React from 'react'
import {BiBrush} from 'react-icons/bi'
import SuccessMessage from './sucsses'
import {useQuery,useMutation,useQueryClient} from 'react-query'
import Bugs from './Bugs'
import { getUser,updateUser,getUsers} from '/lib/helper'
const UpDateUserForm = ({state,dispatch,formId}) => {
    const  {isLoading,isError,data,error}=useQuery(['users',formId],()=> getUser(formId))
    const clientQuery=useQueryClient()
    const updateMutation=useMutation((newData)=>updateUser(formId,newData),{
      onSuccess:async(data)=>{
        clientQuery.prefetchQuery('users',getUsers)
      }
    })
    if(isLoading) return <div>Loading...</div>
  if(isError)return <div>{error}</div>
   
      const {name,salary,date,email,status}=data
      const [firstName,lastName]=name? name.split(" "):state
       
  const handleSubmit=async(e)=>{
     e.preventDefault()
   const fullName=`${state.firstName??firstName} ${state.lastName??lastName}`
   const updated=Object.assign({},data,state,{name:fullName})
   console.log(updated)
      await updateMutation.mutate(updated)
    }
  
  return (
    
    <form onSubmit={handleSubmit} className='grid lg:grid-cols-2 w-4/6 gap-5'>
      <div className='input-type'>
        <input type='text' onChange={dispatch} defaultValue={firstName} name='firstName' className='border w-full px-5 py-2 focus:outline-none rounded-md ' placeholder='FirstName' />
      </div>
      <div className='input-type'>
        <input type='text' onChange={dispatch} defaultValue={lastName}   name='lastName' className='border w-full px-5 py-2 focus:outline-none rounded-md ' placeholder='LastName' />
      </div>
      <div className='input-type'>
        <input type='text'onChange={dispatch} defaultValue={email} name='email' className='border w-full px-5 py-2 focus:outline-none rounded-md ' placeholder='Email' />
      </div>
      <div className='input-type'>
        <input type='text' onChange={dispatch} defaultValue={salary} name='salary' className='border w-full px-5 py-2 focus:outline-none rounded-md ' placeholder='Salary' />
      </div>
      <div className='input-type'>
        <input type='date' onChange={dispatch} defaultValue={date} name='date' className='px-4 py-2 border rounded-md focus:outline-none'  />
      </div>
      <div className='flex gap-10 items-center'>
        <div className='form-check'>
          <input type='radio' onChange={dispatch} defaultChecked={status=="Active"} value='Active' id='radioDefault1' name='status' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' />
          <label htmlFor='radioDefault1' className='inline-black  text-gray-800'>
            Active
          </label>
        </div>
        <div className='form-check'>
          <input type='radio' onChange={dispatch} defaultChecked={status!=='Active'} value='Inactive' id='radioDefault2' name='status' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' />
          <label htmlFor='radioDefault2' className='inline-black  text-gray-800'>
            Inactive
          </label>
        </div>
      </div>
      <button className='flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
        UpDate<span className='px-2' ><BiBrush size={25} /></span>
        </button>
    </form>
     
     
  )
}

export default UpDateUserForm