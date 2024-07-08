import appDB from '@/_lib/prisma-lib';
import { CirclePlus } from 'lucide-react';
import { Fragment } from 'react';
import FilledLink from '../../_components/filled-link';

export default async function PageBlockPage(props: any) {
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

      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-gray-300 dark:border-gray-600 shadow-sm" >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no Pages
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a Pages.
          </p>
          <FilledLink
            label={"Add pages"}
            href={"/admin/pages/add"}
            icon={CirclePlus}
            iconRight={true}
            containerClass='flex justify-start align-middle mt-16 sm:mt-8'
            className={'flex flex-row items-center text-xs font-bold text-white bg-slate-900 hover:bg-blue-700 dark:bg-white dark:text-black hover:dark:bg-blue-600 dark:hover:text-white rounded-full p-[.6rem] pr-6 pl-6 transition-all'}
            iconClass={'w-4 h-4 mr-2'}
          />
        </div>
      </div>
    </Fragment>

  );
} 
