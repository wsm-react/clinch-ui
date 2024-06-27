"use client"

import Link from 'next/link';
import { GetStartedLinks } from '../_interface/app-interface';
import { usePathname } from 'next/navigation';
import { cn } from '@/_lib/utils';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';


const LinkListGetStarted: React.FC<GetStartedLinks> = (cardProps) => {
    const pathName = usePathname(); // Assuming this returns the current pathname
    const isActive = pathName === cardProps.href;
    const button = cardProps.button;

    // const { resolvedTheme, setTheme } = useTheme();
    // const [currentTheme, setCurrentTheme] = useState<string>(resolvedTheme || 'dark');

    // const updateThemeColor = (newTheme: string) => {
    //     const themeColor = newTheme === 'dark' ? '#000000' : '#ffffff';
    //     const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    //     if (metaThemeColor) {
    //         metaThemeColor.setAttribute('content', themeColor);
    //     }
    // };

    // useEffect(() => {
    //     // Ensure this runs only on the client side
    //     if (typeof window !== 'undefined') {
    //         if (pathName === "/get-started") {
    //             setTheme('light'); // Update the theme to 'light'
    //             updateThemeColor('light');
    //         } else {
    //             updateThemeColor(currentTheme);
    //         }
    //     }
    // }, [pathName, currentTheme, setTheme]);

    // useEffect(() => {
    //     updateThemeColor(currentTheme);
    // }, [currentTheme]);

    return (
        <div className="border-b border-t border-slate-300 dark:border-slate-800 mt-[-1px] group">
            <Link href={cardProps.href} className={cn("transition-all focus-visible:ring-[none] pt-6 pb-6 flex flex-row items-center justify-between", button === true ? "rounded-full p-6 pt-3 pb-3" : "")}>
                <div className="asass">
                    <div className={cn("sm:text-[1.2rem] font-semibold group-hover:text-blue-700 dark:text-white dark:group-hover:text-lime-300 transition-all", isActive && "text-blue-700")}>{cardProps.title}</div>
                    <div className="sm:text-[1rem] text-[.9rem] mt-1 sm:mt-0 dark:group-hover:text-gray-400 transition-all">{cardProps.label}</div>
                </div>
                <div className="w-10 h-8 ml-8">
                    <ChevronRight className="inline-block w-8 h-8 group-hover:text-blue-700 dark:group-hover:text-lime-300 transition-all group-hover:translate-x-3" />
                </div>
            </Link>
        </div>
    );
}
export default LinkListGetStarted
