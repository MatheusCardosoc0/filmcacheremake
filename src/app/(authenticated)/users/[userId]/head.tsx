import React from 'react'
import { getUserById } from '../../user/services/get-user-by-id'

const Usershead = async ({params}: {params: {userId: string}}) => {

  const {first_name} = await getUserById(params.userId) 

  return (
    <>
    <title>{first_name}</title>
    </>
  )
}

export default Usershead