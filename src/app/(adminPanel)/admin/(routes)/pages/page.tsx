import appDB from '@/_lib/prisma-lib';
import { CirclePlus, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';
import FilledLink from '../../_components/filled-link';

export default async function PageBlockPage() {
  const pageCount = await appDB.blogPost.count();
  // throw new Error("Thsi is an error");

  return (
    <Fragment>
      <div className="flex items-end container justify-between border-b border-gray-200 dark:border-gray-700 mb-10 pb-5">
        <h1 className="text-2xl font-medium"><span className="transition-colors text-foreground/60 font-bold"></span> Pages</h1>
        <FilledLink
          label={"Add pages"}
          href={"/admin/pages/add"}
          icon={CirclePlus}
          iconRight={true}
          containerClass={"flex justify-start sm:justify-center align-middle"}
          className={'hover:text-blue-700 font-semibold dark:hover:text-cyan-200 text-foreground/50 transition-all'}
          iconClass={'inline-block w-4 h-4 mr-2'}
        />
      </div>
    </Fragment>
  );
} 
