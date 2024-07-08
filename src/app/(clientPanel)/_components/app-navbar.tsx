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
              <div className='text-2xl pt-5 pb-5 font-bold'>AppLogo</div>
              {/* <Image layout="responsive" priority src={appLogo} alt='logo' width={120} height={0} className='h-auto' /> */}
              {/* <ApppLogo alt='logo' width={160} height={0} className='h-auto pt-3 pb-3' /> */}
              {/* <div className='text-4xl pt-5 pb-5 font-bold'>AppLogo</div> */}
              {/* <LogoToggle /> */}
            </Link>
            {/* <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' ><Image src='/logo.svg' alt='logo' width={120} height={40} /></Link> */}
          </div>
          <div className="flex items-center">
            <div className="flex items-center text-sm sm:hidden ">
              <Link href='/get-started' className={"text-[.95rem] rounded-full bg-gradient-to-br from-blue-400 to-blue-700 px-5 py-[.7rem] font-semibold text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2 dark:ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-700/70 flex items-center gap-3 focus-visible:ring-[none]"} >Get started</Link>
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
