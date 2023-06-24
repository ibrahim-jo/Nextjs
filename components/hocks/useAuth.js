export const Initial_State={
    posts:{},
    x:[],
    serverErr:''
}
export  const postAuth=(state,action)=>{
return {
    ...state,
  posts:{ ...state.posts,[ action.payload?.name]:action.payload?.value},
    x:action.loadErorr,
    serverErr:action.loadServer

}
}