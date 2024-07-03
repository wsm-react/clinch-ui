import GetStartedNavBar from '../../_components/get-started-navbar';
import GetStartedFooter from '../../_components/get-started-footer';
import FilledLink from '../../_components/filled-link';
import { Metadata, Viewport } from 'next';
import React from 'react';

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: "thanks for subscribe",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  description: "Clinch thanks for subscribe",
  alternates: {
    canonical: '/calendly'
  },
  keywords: ['get-started', 'React get-started'],
}

export default function SuccessPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-661px)] flex-col">
      <GetStartedNavBar />
      <div className="pt-10 md:pt-20 pb-20">
        <div className="w-11/12 md:w-7/12 mx-auto px-6">
          <div className="border border-gray-300 rounded-xl sm:p-20 p-10 md:text-center">
            <div className="xl:text-[3rem]/[2.8rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[2.4rem]/[2.7rem] font-bold md:font-semibold">Thanks</div>
            <div className="sm:text-[1.6rem] text-[1.2rem] mt-6 md:mt-6">we have received your details and noted your call preference</div>
            <FilledLink
              label={"Back to home"}
              href={`/`}
              containerClass='flex justify-start md:justify-center align-middle mt-20'
              className={'sm:text-[1.1rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center font-bold text-white bg-slate-900 hover:bg-blue-700 dark:bg-white dark:text-black hover:dark:bg-blue-600 dark:hover:text-white h-12 rounded-full p-[.5rem] pr-10 pl-10 transition-all'}
            // iconRight={true}
            // icon={MoveLeft}
            // iconClass={'inline-block w-8 h-10 mr-6 '}
            />
          </div>
        </div>
      </div>
      <GetStartedFooter />
    </div>
  );
}
