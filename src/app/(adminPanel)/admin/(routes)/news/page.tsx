import { NewsAndBlogsTable } from './_components/blog-table';
import { InsertBlogForm } from './_components/insert-blog';

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import NewsAndBlogsData from './_components/blog-userdata';
import { Suspense } from 'react';
import appDB from '@/_lib/prisma-lib';

export default async function NewsAndBlogsPage() {

  // const { toast } = useToast();
  const blogCount = await appDB.blogPost.count();

  return (
    <div>
      <h1 className='border-b border-gray-200 mb-7 pb-6 font-medium'>News and blogs page</h1>
      <div className='flex flex-col space-y-3'>
        <div className="asas">{blogCount} Posts </div>
        <Suspense fallback="Loading ...">
          <NewsAndBlogsData />
        </Suspense>
      </div>
      <div className="flex gap-12">

        <div className="w-2/5">
        </div>
        <div className="w-3/5">
          {/* <NewsAndBlogsTable columns={NewsAndBlogsTableColumns} data={NewsAndBlogsData} /> */}
        </div>
      </div>
    </div>
  );
}
