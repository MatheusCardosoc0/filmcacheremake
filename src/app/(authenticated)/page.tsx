import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getUsers } from './user/services/get-users'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const users = await getUsers()

  return (
    <main >
      <h2>Usuarios</h2>

      <div>
        {users.map((user: any) => (
          <Link style={{
            marginRight: '20px'
          }}

            href={`users/${user.id}`} key={user.id}>{user.id} - {user.first_name}</Link>))
        }
      </div>
    </main>
  )
}
