export const Initial_State={}
export const postReducer=(state,e)=>{ 
   return{
    ...state,
   [e.target.name]:e.target.value
    
   }

}

