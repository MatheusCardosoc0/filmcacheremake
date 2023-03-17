'use client'

import { getUsers } from '@/app/(authenticated)/user/services/get-users'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {
  currentUserId: string
}

const OrtherUsers = ({ currentUserId }: Props) => {

  const [otherUsers, setOtherUsers] = useState([])

  useEffect(() => {
    async function teste() {
      const users = await getUsers()

      setOtherUsers(users.filter((user: any) => user.id !== parseInt(currentUserId)))
    }

    teste()
  }, [currentUserId, setOtherUsers])

  return (
    <ul>
      {otherUsers.map((user: any) => (
        <li key={user.id}>
          <Link style={{
            marginRight: '20px'
          }}

            href={`users/${user.id}`}>
            {user.id} - {user.first_name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default OrtherUsers