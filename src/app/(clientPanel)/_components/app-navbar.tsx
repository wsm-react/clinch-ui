import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import MobileNavBar from './mobile-navbar';
import MenuLink from './nav-menu-link';
import { ArrowRight } from 'lucide-react';

export default function AppNavBar() {
  const buttonClasses = buttonVariants({ variant: "secondary" });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 drop-shadow-xl">
      {/* <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 drop-shadow-xl"> */}
      <div className="container flex h-14 max-w-screen-xl items-center max-sm:pr-2 max-sm:pl-6">
        <div className="flex justify-between w-full">
          <div className="flex items-center font-bold">
            <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Logo</Link>
            {/* <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' ><Image src='/logo.svg' alt='logo' width={120} height={40} /></Link> */}
          </div>
          <div className="flex items-center">
            <div className="flex items-center text-sm lg:gap-6 md:hidden ">
              <Link href='/' className={`${buttonClasses} h-7 rounded-md pr-2 text-xs bg-blue-600 hover:bg-blue-700 transition-colors hover:text-foreground/80 text-foreground/60 mr-5 focus-visible:ring-[none] flex flex-row items-center`} >Get started <ArrowRight className="inline-block w-4 ml-2" /></Link>
              <MobileNavBar />
            </div>
            <div className="hidden lg:block">
              <MenuLink />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
