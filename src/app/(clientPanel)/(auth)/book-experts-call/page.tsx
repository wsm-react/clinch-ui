import React from 'react';
import { Metadata, Viewport } from 'next';

import { GetStartedLinks } from '@/app/interface/client-interface';
import GetStartedNavBar from '../../_components/get-started-navbar';
import LinkListGetStarted from '../../_components/get-started/list-get-started';


export const viewport: Viewport = {
  themeColor: '#ffffff',
}


export const metadata: Metadata = {
  title: "Let's start",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  description: "Clinch Let's start",
  alternates: {
    canonical: '/book-experts-call'
  },
  keywords: ['get-started', 'React get-started'],
}

export default function BookExpertsCallPage() {

  const getStartedList: GetStartedLinks[] = [
    {
      id: 1,
      title: "Book a FREE call with Our Experts.",
      label: "Choose a day and time of your preference for a FREE pre Investment call",
      href: "/sign-in",
      textColor: "text-blue-700 font-bold"
    },
    {
      id: 2,
      title: "Let's do it later ",
      label: "I am good , Please call me back as per your schedule ",
      href: "/success",
    }
  ]

  return (
    <div className="relative flex min-h-[calc(100vh-661px)] flex-col">
      <GetStartedNavBar />
      <div className="pt-10 md:pt-20 pb-40">
        <div className="w-11/12 md:w-7/12 mx-auto px-6">
          <div className="xl:text-[2.4rem]/[2.8rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[2rem]/[2.1rem] font-normal md:font-semibold">Let's start right away</div>
          <div className="sm:text-[1.12rem] text-[1rem] mt-5 md:mt-2">Our investment journey start with a pre investment consultation with experts, Choose your call preference</div>
        </div>
        <div className="w-11/12 md:w-7/12 mx-auto px-6 mt-16 md:mt-16">
          {getStartedList.map((items, index) => {
            return (<LinkListGetStarted key={index} title={items.title} label={items.label} href={items.href} textColor={items.textColor} />)
          })}
        </div>
      </div>
    </div>
  );
}
