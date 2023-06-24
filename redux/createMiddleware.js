import {createListenerMiddleware} from '@reduxjs/toolkit'
import {toggleChangeAction,updateForm} from './reducer'
const listenerMiddleware=createListenerMiddleware()
listenerMiddleware.startListening({
    actionCreator:toggleChangeAction,
    effect:async(action,listenerApi)=>{
        console.log('middleware',action.payload)
        listenerApi.dispatch(updateForm(action.payload))
    }

})

export default listenerMiddleware

 