import React,{useReducer} from 'react'
import {BiPlus} from 'react-icons/bi'
import SuccessMessage from './sucsses'
import {createUser,getUsers} from '../lib/helper'
import Bugs from './Bugs'
import {useMutation,useQueryClient} from 'react-query'
import InputField from './InputField'
const AddUserForm = ({state,dispatch}) => {
  const client=useQueryClient()
  const createMutation=useMutation(createUser,{
    onSuccess: ()=>client.prefetchQuery('users',getUsers)
  })
  const handleSubmit=(e)=>{
     e.preventDefault()
     if(Object.keys(state).length==0){
      return  console.log('NO DATA')
     }
     else{
       let{firstName,lastName,email,salary,date,status}=state
       const model={
        name:`${firstName} ${lastName}`,
        avatar:`https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*10)}.jpg`,
        email,salary,date,
        status:status??'Active'
       }
       createMutation.mutate(model)

     }
  }

if(createMutation.isLoading)return <div>isLoading....</div>
if(createMutation.isError)return <Bugs message={createMutation.error.message}/>
if(createMutation.isSuccess)return<SuccessMessage message={'Add user sucssess'} /> 

  return (
  
    <form onSubmit={handleSubmit} className='grid lg:grid-cols-2 w-4/6 gap-5'>
      <div className='input-type'>
        <InputField 
        type={'text'}
        onChange={dispatch}
         name='firstName'
         placeholder='FirstName'
        />
      </div>
      <div className='input-type'>
        <InputField 
        type={'text'}
         onChange={dispatch}
          name='lastName'
          placeholder='LastName'
        />
      </div>
      <div className='input-type'>
      <InputField 
      type={'text'}
         onChange={dispatch}
          name='email'
          placeholder='Email'
        />
      </div>
      <div className='input-type'>
      <InputField 
      type={'text'}
         onChange={dispatch}
          name={'salary'}
          placeholder='Salary'
        />
      </div>
      <div className='input-type'>
   <InputField 
   type={'date' }
   onChange={dispatch}
    name={'date'}
   />
      </div>
      <div className='flex gap-10 items-center'>
        <div className='form-check'>
          <input type='radio' onChange={dispatch} value='Active' id='radioDefault1' name='status' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' />
          <label htmlFor='radioDefault1' className='inline-black  text-gray-800'>
            Active
          </label>
        </div>
        <div className='form-check'>
          <input type='radio' onChange={dispatch} value='Inactive' id='radioDefault2' name='status' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' />
          <label htmlFor='radioDefault2' className='inline-black  text-gray-800'>
            Inactive
          </label>
        </div>
      </div>
      <button
       className='flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
        Add<span className='px-2' ><BiPlus size={25} /></span>
        </button>
    </form>
     
  )
}

export default AddUserForm