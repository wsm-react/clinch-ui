import { useEffect } from 'react'
import appDB from '@/lib/prisma-lib'
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export default async function UserListData() {

    // useEffect(() => {
    //     fetch("api/v1/blog/")
    // }, [])

    const blogpost = await appDB.user.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });



    // console.log(blogpost);

    return (
        <div className='flex flex-col space-y-3'>
            <div className="grid gap-x-8 gap-y-4 grid-cols-3">
                {blogpost.map((post) => (
                    <div key={post.id} className="rounded-md border p-5 pr-6 pl-6">
                        <p className="font-bold">{post.name}</p>
                        <p>{post.email}</p>
                        <div className='mt-6 '>
                            <Link className='text-blue-500 font-bold text-xs flex flex-row items-center' href={'/admin/user/' + post.id} >View detail <MoveRight className="inline-block w-4 ml-2" /></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
