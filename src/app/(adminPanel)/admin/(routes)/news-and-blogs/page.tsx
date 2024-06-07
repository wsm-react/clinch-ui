import Image from "next/image";
import { NewsAndBlogsTable } from './_components/blog-table';
import { NewsAndBlogsData, NewsAndBlogsTableColumns } from './_components/blog-table-data';

export default function NewsAndBlogsPage() {
  return (
    <div>
      <h1>NewsAndBlogsPage</h1>
      <div className="flex gap-5">
        <div className="w-2/5">

        </div>
        <div className="w-3/5">
          <NewsAndBlogsTable columns={NewsAndBlogsTableColumns} data={NewsAndBlogsData} />
        </div>
      </div>
    </div>
  );
}
