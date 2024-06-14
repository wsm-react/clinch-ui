import { NewsAndBlogsTable } from './_components/blog-table';
import { InsertBlogForm } from './_components/insert-blog';

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import NewsAndBlogsData from './_components/blog-userdata';

export default function NewsAndBlogsPage() {

  // const { toast } = useToast();

  return (
    <div>
      <h1 className='border-b border-gray-200 mb-7 pb-6 font-medium'>News and blogs page</h1>
      <div className="asasaasas">
        <NewsAndBlogsData />
      </div>
      <div className="flex gap-12">

        <div className="w-2/5">
          {/* <InsertBlogForm /> */}
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
          {/* <NewsAndBlogsTable columns={NewsAndBlogsTableColumns} data={NewsAndBlogsData} /> */}
        </div>
      </div>
    </div>
  );
}
