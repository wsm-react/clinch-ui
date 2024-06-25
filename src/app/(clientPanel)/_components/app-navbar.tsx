import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import React from "react";
import MobileNavBar from './mobile-navbar';
import MenuLink from './nav-menu-link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ModeToggle } from './mode-toggle';

import ApppLogo from "/public/logo-dark.svg";
import { LogoToggle } from './logo-toggle';

export default function AppNavBar() {
  const buttonClasses = buttonVariants({ variant: "secondary" });

  return (
    // <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 drop-shadow-xl">
    <header className="z-50 w-full bg-background">
      {/* <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 drop-shadow-xl"> */}
      <div className="flex w-11/12 mx-auto px-1 sm:px-1 md:px-5 items-center">
        <div className="flex justify-between w-full">
          <div className="flex items-center font-bold">
            <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >
              <div className='text-2xl pt-5 pb-5 font-bold'>Logo</div>
              {/* <Image layout="responsive" priority src={appLogo} alt='logo' width={120} height={0} className='h-auto' /> */}
              {/* <ApppLogo alt='logo' width={160} height={0} className='h-auto pt-3 pb-3' /> */}
              {/* <LogoToggle /> */}
            </Link>
            {/* <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' ><Image src='/logo.svg' alt='logo' width={120} height={40} /></Link> */}
          </div>
          <div className="flex items-center">
            <div className="flex items-center text-sm sm:hidden ">
              <Link href='/get-started' className={`rounded-full p-6 pt-3 pb-3 text-[1rem] font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all focus-visible:ring-[none] flex flex-row items-center`} >Get started</Link>
              {/* <MobileNavBar /> */}
            </div>
            <div className="hidden sm:block">
              <MenuLink />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
