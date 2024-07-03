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

export default async function AddNewPage({ params }: any) {


  return (
    <div>
      {/* <h1 className=' mb-10 font-medium'>{blogsData?.id}</h1>
      <p className=''>{blogsData?.title}</p>
      <p className=''>{blogsData?.slug}</p>
      <p className=''>{blogsData?.body}</p> */}
      <div className='mt-12'>
        <Link className='text-blue-500 font-medium' href={'/admin/pages/'} >Back</Link>
      </div>
    </div>
  )
}
