import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {BiX, BiCheck} from "react-icons/bi"
import { deleteUser, getUsers } from '/lib/helper'
import { useQueryClient } from 'react-query'
import {deleteClient} from '../redux/reducer'
const ConfirmDelete = () => {
  const id=useSelector(state=>state.app.visible.deleteId)
  const client=useQueryClient()
  const dispatch=useDispatch()
const handelDelete=async()=>{
  if (id) {
    await deleteUser(id)
    await client.prefetchQuery('users',getUsers)
     dispatch(deleteClient(null)) 
  }
}
const handleCancel=async()=>{
   dispatch(deleteClient(null)) 
}
  return (
    <>{id?
    < div className='flex gap-5'>
    <p>are you sure?</p>
    <button onClick={handelDelete}
     className='flex bg-red-500 text-whit px-4 py-2 border rounded-md hover:bg-rose-300 hover:border-red-500 hover:text-gray-50'
      >
      Yes<span className='px-1'><BiX  size={25} /></span>
      </button>
    <button  onClick={handleCancel}
    className='flex bg-green-500 text-whit px-4 py-2 border rounded-md hover:bg-rose-300 hover:border-green-500 hover:text-gray-50' >
      NO <span className='px-1'><BiCheck  size={25} /></span>
      </button>
    </div>:<></>}</>
  )
}

export default ConfirmDelete   