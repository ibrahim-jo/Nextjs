import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  visible:{
    toggleForm:false,
    formId:undefined,
    deleteId:null
  } 
}

export const reducerSlice = createSlice({
  name: 'crudapp',
  initialState,
  reducers: {
   toggleChangeAction:(state)=>{
     state.visible.toggleForm=!state.visible.toggleForm
   },
   updateForm:(state,action)=>{
     state.visible.formId=action.payload
   },
   deleteClient:(state,action)=>{
    state.visible.deleteId=action.payload
   }

    }
   
})

// Action creators are generated for each case reducer function
export const { toggleChangeAction,updateForm,deleteClient} =reducerSlice.actions

export default reducerSlice.reducer