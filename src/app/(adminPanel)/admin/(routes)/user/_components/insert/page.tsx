import appDB from '@/lib/prisma-lib'
import Link from 'next/link'


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

export default async function AddBlogsPage({ params }: any) {

  // const { toast } = useToast()

  return (
    <div>
      <h1 className=' mb-10 font-medium'>Add Blog</h1>
    </div>
  )
}
