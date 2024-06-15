import Link from 'next/link';
import UserListData from './_components/user-list-data';
import appDB from '@/lib/prisma-lib';
import { Suspense } from 'react';


export default async function UserPage() {

  // const { toast } = useToast();
  const blogCount = await appDB.blogPost.count();

  return (
    <div>
      <div className="flex items-end justify-between border-b border-gray-200 mb-10 pb-5">
        <h1 className="text-2xl font-medium"><span className="transition-colors text-foreground/60 font-bold">{blogCount}</span> Users</h1>
        <p className="text-sm font-bold p-0 m-0"> <Link className="transition-colors hover:text-blue-800/80 text-foreground/50" href={'/admin/user/edit'}>+ Add user</Link></p>
      </div>
      <Suspense fallback="Loading ...">
        <UserListData />
      </Suspense>
    </div>
  );
}
