import Image from "next/image";
import GetStartedNavBar from '../../_components/get-started-navbar';
import { FormGetStarted } from '../../_components/get-started/form-get-started';
import { ShieldCheck } from 'lucide-react';
import { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#ffffff',
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
          <div className="text-gray-500 text-xs mt-16 flex flex-row items-center"><ShieldCheck className='inline-block w-5 h-5 mr-2' /> All your information is secure.</div>
        </div>
      </div>
    </div>
  );
}
