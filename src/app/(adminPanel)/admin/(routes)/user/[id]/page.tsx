import appDB from '@/_lib/prisma-lib'
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

export default async function NewsAndBlogsPage({ params }: any) {

  const blogsData = await appDB.user.findUnique({
    where: {
      id: params.id
    }
  })

  // const { toast } = useToast()

  return (
    <div>
      <h1 className=' mb-10 font-medium'>{blogsData?.id}</h1>
      <p>{blogsData?.name}</p>
      <p>{blogsData?.email}</p>
      <p>{blogsData?.hashPassword}</p>
      <div className='mt-12'>
        <Link className='text-blue-500 font-medium text-sm' href={'/admin/user'} >Back</Link>
      </div>
    </div>
  )
}
