import appDB from '@/lib/prisma-lib'
import Link from 'next/link'
import { InsertUserForm } from '../_components/insert-user'


type blogs = {
  id: string
  slug: string
  title: string
  body: string
  published: boolean
  authorId: string
}

// interface Datablogs {
//   params: blogs
// }

export default async function EditUserPage({ params }: any) {

  // const { toast } = useToast()

  return (
    <div>
      <div className="border-b border-gray-200 mb-7 pb-6 ">
        <h1 className='text-2xl font-medium mb-2'>Add New User</h1>
        <p className='text-xs text-gray-500'>Create a brand new user and add them to this site.</p>
      </div>
      <div className="max-w-[480px]">
        <InsertUserForm />
      </div>
    </div>
  )
}
