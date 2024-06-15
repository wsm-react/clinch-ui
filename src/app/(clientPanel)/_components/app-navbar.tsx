import Link from 'next/link';
import NavMenuLink from './nav-menu-link';

export default function AppNavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 drop-shadow-xl">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* <div className="flex items-center gap-4 text-sm lg:gap-6">
          <NavMenuLink />
        </div> */}
        <div className="flex justify-between align-middle flex-1 ml-3">
          <div className="flex items-center gap-4 font-bold">
            <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Logo</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="items-center gap-4 text-sm lg:gap-6 md:hidden">
              <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Logout</Link>
            </div>
            <div className="hidden lg:block mr-6">
              <NavMenuLink />
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}
