import { useEffect } from 'react'
import appDB from '@/lib/prisma-lib'
import Link from 'next/link';

export default async function NewsAndBlogsData() {

    // useEffect(() => {
    //     fetch("api/v1/blog/")
    // }, [])

    const blogpost = await appDB.blogPost.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });

    const blogCount = await appDB.blogPost.count();

    // console.log(blogpost);

    return (
        <div className='flex flex-col space-y-3'>
            <div className="asas">{blogCount} Posts </div>
            {blogpost.map((post) => (
                <div className="rounded-md border p-5 pr-6 pl-6 w-full">
                    <div key={post.id}>
                        <p className="font-bold mb-3">{post.title}</p>
                        <p>{post.body}</p>
                        <div className='mt-6'>
                            <Link className='text-blue-500 font-medium' href={'/admin/news-and-blogs/' + post.id} >View detail</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
