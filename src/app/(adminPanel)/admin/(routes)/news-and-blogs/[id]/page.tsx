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

export default async function NewsAndBlogsPage({ params }: any) {

  const blogsData = await appDB.blogPost.findUnique({
    where: {
      id: params.id
    }
  })

  // const { toast } = useToast()

  return (
    <div>
      <h1 className=' mb-10 font-medium'>{blogsData?.id}</h1>
      <p className=''>{blogsData?.title}</p>
      <p className=''>{blogsData?.slug}</p>
      <p className=''>{blogsData?.body}</p>
      <div className='mt-12'>
        <Link className='text-blue-500 font-medium' href={'/admin/blogs/'} >Back</Link>
      </div>
    </div>
  )
}
