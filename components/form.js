import React,{useReducer} from 'react'
import {Initial_State,postReducer} from './hocks/useReducer'
import AddUserForm from './AddUserForm'
import UpDateUserForm from './UpDateUserForm'
import {useSelector} from 'react-redux'
const Form = () => {
  const [state, dispatch] = useReducer(postReducer, Initial_State)
  const formId=useSelector((state)=>{return state.app.visible.formId})
  formId?console.log(formId):console.log('no id')
  return (
    <div className='container mx-auto py-5'>
   {formId?UpDateUserForm({state,dispatch,formId}):AddUserForm({state,dispatch})}
   </div>
  )
}

export default Form