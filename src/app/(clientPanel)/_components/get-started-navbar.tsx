import Link from 'next/link';
import React from "react";
import { LogoToggle } from './logo-toggle';
import { NavGoBack } from './nav-go-back';


export default function GetStartedNavBar() {
    return (
        // <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 drop-shadow-xl">
        <header className="z-50 w-full bg-background">
            {/* <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 drop-shadow-xl"> */}
            <div className="flex w-11/12 md:w-7/12 mx-auto px-6 items-center">
                <div className="flex justify-between w-full">
                    <div className="flex items-center font-bold">
                        <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >
                            {/* <div className='text-4xl pt-5 pb-5 font-bold'>AppLogo</div> */}
                            <LogoToggle />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <NavGoBack />
                    </div>
                </div>
                {/* <ModeToggle /> */}
            </div>
        </header>
    );
}
