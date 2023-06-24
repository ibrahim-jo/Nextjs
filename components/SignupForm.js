import React, { useReducer, useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { postAuth, Initial_State } from './hocks/useAuth'
import InputField from './InputField'
import validate from '../lib/validate'
import { loginAuth, signup } from '../lib/helper'
import { useRouter } from 'next/router'
const SignupForm = () => {
  const [state, dispatch] = useReducer(postAuth, Initial_State)
  const [loading, setloading] = useState(false)
  const router = useRouter()
  const er = validate(state.posts)
  const handleChange = (e) => {
    dispatch({ payload: { name: e.target.name, value: e.target.value } })

  }
  const handleAuth = async (e) => {
    console.log('posts', state.posts)
    e.preventDefault()
    if (er.length > 0) {
      dispatch({ loadErorr: er })
      console.log(state)
    }
    else {
      setloading(true)
      const res = await signup(state.posts)
      if (res.error) {
        dispatch({loadServer:res.error })
        console.log(state)

      }
      else {
        const loginRes = await loginAuth(state.posts?.email, state.posts?.password)
        console.log('loginREsa', loginRes)
        if (loginRes && !loginRes.ok) {
          dispatch({loadServer:res.error })
          console.log(state)
        }
        router.push("/")

      }

    }
    setloading(false)
  }
  return (

    <form onSubmit={handleAuth} className=' grid grid-cols-1 w-6/12  bg-indigo-100 p-6 shadow-lg rounded-md gap-4' >
      <div className='flex justify-center gap-2'>
        <FiUser size={35} />
        <h1 className='block text-center font-extralight text-3xl'>
          SignUp
        </h1>
      </div>

      <hr />

      <InputField
        type={'text'}
        onChange={handleChange}
        name={'fullName'}
        placeholder={'FullName...'}
        label={'Full Name'}
        error={state.x?.map(err => err?.fullName)}
      />

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
        error={state.x?.map(err => err?.password)}
      />

      <InputField
        type={'password'}
        onChange={handleChange}
        name={'confirmPassword'}
        placeholder={'confirmPassword...'}
        label={'Re-PassWord'}
        error={state.x?.map(err => err?.confirmPassword)}
      />


      {state.serverErr}
      <div>
        <button type='submit'
          disabled={loading}
          className='border-2 w-full border-indigo-400 bg-indigo-200 text-black px-2 py-2 rounded-md hover:bg-indigo-500 hover:text-white hover:border-indigo-50 disabled:bg-slate-300'>
          signup
        </button>
      </div>
      {loading?<>%%%%%%%%%%%%%%</>:<></>}
    </form>
  )
}

export default SignupForm