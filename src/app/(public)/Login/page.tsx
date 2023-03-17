'use client'

import React, { FormEvent } from 'react'

import {useRouter} from 'next/navigation'

const LoginPage = () => {

  const router = useRouter()

  function submit(e: FormEvent){
    router.push('/')
    e.preventDefault()
  }

  return (
    <form onSubmit={submit}>
     <div>
      <label>Email</label>
      <input placeholder='email' />
      <button type='submit'>
        Enviar
        </button>
     </div>
    </form>
  )
}

export default LoginPage