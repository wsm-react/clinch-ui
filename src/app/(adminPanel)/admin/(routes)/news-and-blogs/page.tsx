
"use client"

import { NewsAndBlogsTable } from './_components/blog-table';
import { NewsAndBlogsData, NewsAndBlogsTableColumns } from './_components/blog-table-data';
import { InsertBlogForm } from './_components/insert-blog';

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export default function NewsAndBlogsPage() {

  // const { toast } = useToast();

  return (
    <div>
      <h1>NewsAndBlogsPage</h1>
      <div className="flex gap-5">
        <div className="w-2/5">
          <InsertBlogForm />

          {/* <Button
            variant="outline"
            onClick={() => {
              console.log('asasas');
              toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
              })
            }}
          >
            Show Toast
          </Button> */}
        </div>
        <div className="w-3/5">
          <NewsAndBlogsTable columns={NewsAndBlogsTableColumns} data={NewsAndBlogsData} />
        </div>
      </div>
    </div>
  );
}
