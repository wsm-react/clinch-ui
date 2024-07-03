"use client"

import { Loader2, ServerCrash, ShieldCheck } from 'lucide-react';
// import { Loader2 } from 'lucide-react';
import { Fragment } from 'react';
import FilledLink from '../../_components/filled-link';

export default function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {

    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-58px)]">

            <div className="sm:text-[.9rem] text-[.95rem] flex flex-row items-center p-7 pr-8 pl-10 border-[.22rem] border-red-200 bg-red-100/30 rounded-lg ">
                <div className="w-12 h-12 mr-4">
                    <ServerCrash className='inline-block w-12 h-12 text-red-600' />
                </div>
                <div className="text-2xl">{error.message}</div>
            </div>

            <FilledLink
                label={"Refress page"}
                href={`/admin/pages`}
                containerClass='flex justify-start md:justify-center align-middle mt-20'
                className={'sm:text-[1.1rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center font-bold text-white bg-slate-900 hover:bg-blue-700 dark:bg-white dark:text-black hover:dark:bg-blue-600 dark:hover:text-white h-12 rounded-full p-[.5rem] pr-10 pl-10 transition-all'}
            />
        </div>
    );
}
