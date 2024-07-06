import Image from "next/image";
import GetStartedNavBar from '../../_components/get-started-navbar';
import { FormGetStarted } from '../../_components/get-started/form-get-started';
import { ShieldCheck } from 'lucide-react';
import { Metadata, Viewport } from 'next';
import { SignIn } from '@clerk/nextjs';

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: "signup",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  description: "Clinch signup",
  alternates: {
    canonical: '/sign-up'
  },
  keywords: ['get-started', 'React get-started'],
}

export default function SignUpScreen() {
  return (
    <div className="relative flex min-h-[calc(100vh-661px)] flex-col">
      <GetStartedNavBar />
      <div className="pt-10 md:pt-20 pb-40">
        <div className="w-11/12 md:w-6/12 mx-auto px-6">
          <div className="xl:text-[2.4rem]/[2.8rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[2rem]/[2.1rem] font-normal md:font-semibold">Great, let's start with your details</div>
          <div className="sm:text-[1.25rem] text-[1rem] mt-5 md:mt-2">You'll use this as your login.</div>
        </div>
        <div className="w-11/12 md:w-6/12 mx-auto px-6 mt-12 md:mt-16">
          <FormGetStarted />
          <div className="sm:text-[.9rem] text-[.95rem] mt-16 flex flex-row items-start p-4 border border-green-400 bg-green-100/50 rounded-lg ">
            <div className="w-9 h-9 sm:w-5 sm:h-5 mr-4">
              <ShieldCheck className='inline-block w-9 h-9 sm:w-6 sm:h-6 mr-5 text-green-800' />
            </div>
            We offer Spam free experience. We never call you unless requested by you
          </div>
        </div>
      </div>
    </div>
  );
}
