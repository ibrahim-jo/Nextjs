import React from 'react'
import {BiTrashAlt,BiEdit } from 'react-icons/bi'
import {getUsers} from '/lib/helper'
import {useQuery} from 'react-query'
import {useSelector,useDispatch} from 'react-redux'
import {toggleChangeAction,updateForm,deleteClient} from '../redux/reducer'
const Table = () => {
const{isLoading,isError,data,error}=useQuery('users',getUsers)
if(isLoading)return <div>is loading...</div>
if(isError)return <div>{error}</div>
  return (
    <table  className='min-w-full table-auto'>
        <thead>
            <tr className='bg-gray-800'>
                <th className='px-16 py-2'>
                 <span className='text-gray-100'>Name</span>
                </th>
                <th className='px-16 py-2'>
                 <span className='text-gray-100'>Email</span>
                </th>
                <th className='px-16 py-2'>
                 <span className='text-gray-100'>Salary</span>
                </th>
                <th className='px-16 py-2'>
                 <span className='text-gray-100'>Birthday</span>
                </th>
                <th className='px-16 py-2'>
                 <span className='text-gray-100'>Status</span>
                </th>
                <th className='px-16 py-2'>
                 <span className='text-gray-100'>Actions</span>
                </th>
            </tr>
        </thead>
        <tbody className='bg-gray-200' >
            {data.map((item,i)=>{
               
                return(
                    <Tr data={item} key={i} />
                ) 
               
            })}
        </tbody>
    </table>
  )
}

export default Table


const Tr=({data})=>{
    const visible=useSelector((state)=>state.app.visible.toggleForm)
     const dispatch=useDispatch()
     const {_id,name,avatar,email,salary,date,status}=data

     const onUpdate=()=>{
      dispatch(toggleChangeAction(_id))
      if(visible)
      dispatch(updateForm(_id))
       
     }
     const onDelete=()=>{
        if(!visible)
      dispatch(deleteClient(_id))
     }
    return(
        <tr className='text-center bg-gray-50'>
        <td className='px-10 py-2 flex flex-row items-center'>
            <img src={avatar||'#'} alt='pic'className='h-8 w-8 rounded-full object-cover' />
            <span className='text-center ml-2 font-semibold'>{name  ||'unknown'}</span>
        </td>
        <td className='px-10 py-2'>
            {email  ||'unknown'}
        </td>
        <td className='px-10 py-2'>
            $ {salary ||'unknown'}
        </td>
        <td className='px-10 py-2'>
           {date}
        </td>
        <td className='px-10 py-2'>
           <button className='cursor'>
            <span className={`${status=='Active'?'bg-green-500':'bg-red-500'}  px-5 py-1 text-white rounded-full`} >{status}</span>
            </button>
        </td>
        <td className='px-10 py-2 flex  justify-around gap-5'>
           <button className='cursor'onClick={onUpdate} ><BiEdit size={25} color='green' /> </button>
           <button className='cursor' onClick={onDelete} ><BiTrashAlt size={25} color='red' /> </button>
        </td>
    </tr>
    )
}