import Link from 'next/link';

export default function AppNavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 drop-shadow-xl">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center gap-4 text-sm lg:gap-6">
          <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Home Page</Link>
          <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Home Page</Link>
          <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Home Page</Link>
          <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Home Page</Link>
        </div>
      </div>
    </header>
  );
}
