import InputField from '/components/InputField'
import React, { useReducer, useState } from 'react'
import { postAuth, Initial_State } from './hocks/useAuth'
import { useRouter } from 'next/router'
import { loginAuth } from '../lib/helper'
const LoginForm = () => {
  const router = useRouter()
  const [state, dispatch] = useReducer(postAuth, Initial_State)
  const [loding, setloding] = useState(false)
  // const er = validate(state)
  const handleChange = (e) => {
    dispatch({ payload: { name: e.target.name, value: e.target.value } })

  }
  const handleAuth = async (e) => {
    e.preventDefault()
    const loginRes = await loginAuth(state.posts?.email, state.posts?.password)
    if (loginRes && !loginRes.ok) {
      dispatch({ loadServer: loginRes.error })
    }
    else {
      router.push("/")
    }
  }



  return (
    <form onSubmit={handleAuth} className=' grid grid-cols-1 w-6/12  bg-indigo-100 p-6 shadow-lg rounded-md gap-4' >
      <div className='flex justify-center gap-2'>

        <h1 className='block text-center font-extralight text-3xl'>
          LogIn
        </h1>
      </div>
      <InputField
        type={'email'}
        onChange={handleChange}
        name={'email'}
        placeholder={'Email...'}
        label={'Email'}
      />
      <InputField
        type={'password'}
        onChange={handleChange}
        name={'password'}
        placeholder={'password...'}
        label={'Password'}
      />

      {state.serverErr}
      <div>
        <button type='submit'
          className='border-2 w-full border-indigo-400 bg-indigo-200 text-black px-2 py-2 rounded-md hover:bg-indigo-500 hover:text-white hover:border-indigo-50'>
          LogIn
        </button>
      </div>
    </form>

  )
}

export default LoginForm