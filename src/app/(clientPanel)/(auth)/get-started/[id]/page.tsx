import { Metadata, Viewport } from 'next';
import React from 'react';
import { GetStartedLinks } from '../../../_components/_interface/app-interface';
import LinkListGetStarted from '../../../_components/get-started/list-get-started';
import GetStartedNavBar from '@/app/(clientPanel)/_components/get-started-navbar';
import { useSearchParams } from 'next/navigation';
import LinkbookExpert from '@/app/(clientPanel)/_components/get-started/list-book-expert';

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

export default function BookExpertsCallPage({ params }: any) {

  return (
    <div className="relative flex min-h-[calc(100vh-661px)] flex-col">
      <GetStartedNavBar />
      <LinkbookExpert title={`Let's start right away`} content={'Our investment journey start with a pre investment consultation with experts, Choose your call preference'} />
    </div>
  );
}
