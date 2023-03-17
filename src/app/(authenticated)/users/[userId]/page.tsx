import React from 'react'
import { getUserById } from '../../user/services/get-user-by-id'
import OrtherUsers from './components/other_users'

const UsersPage = async ({params}: {params: {userId: string}}) => {

  const user = await getUserById(params.userId)

  return (
    <>
      <h2>Users</h2>

      <div>
        {user.first_name}
      </div>

      <div>
        <h2>Outros usuários</h2>

        <OrtherUsers currentUserId={params.userId} />
      </div>
    </>
  )
}

export default UsersPage