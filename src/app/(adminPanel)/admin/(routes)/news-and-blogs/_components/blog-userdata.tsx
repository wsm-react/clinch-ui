import { useEffect } from 'react'
import appDB from '@/lib/prisma-lib'
import Link from 'next/link';

export default async function NewsAndBlogsData() {

    const blogpost = await appDB.blogPost.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });

    // console.log(blogpost);

    return (
        <>
            {blogpost.map((post) => (
                <div key={post.id} className="rounded-md border p-5 pr-6 pl-6 w-full">
                    <div key={post.id}>
                        <p className="font-bold mb-3">{post.title}</p>
                        <p>{post.body}</p>
                        <div className='mt-6'>
                            <Link className='text-blue-500 font-medium' href={'/admin/news-and-blogs/' + post.id} >View detail</Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
