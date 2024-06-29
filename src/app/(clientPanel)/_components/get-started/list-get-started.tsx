"use client"

import Link from 'next/link';
import { GetStartedLinks } from '../_interface/app-interface';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/_lib/utils';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';


const LinkListGetStarted: React.FC<GetStartedLinks> = (cardProps) => {
    const pathName = usePathname(); // Assuming this returns the current pathname
    const button = cardProps.button;

    return (
        <div className={cn("border-b border-t border-slate-300 dark:border-slate-800 mt-[-1px] group")}>
            <Link href={cardProps.href} className={cn("transition-all focus-visible:ring-[none] pt-6 pb-6 flex flex-row items-center justify-between", button === true ? "rounded-full p-6 pt-3 pb-3" : "")}>
                <div className="asass">
                    <div className={cn("sm:text-[1.2rem] font-medium group-hover:text-blue-700 dark:text-white dark:group-hover:text-lime-300 transition-all", cardProps.textColor)}>{cardProps.title}</div>
                    <div className={cn("sm:text-[.95rem] text-[.9rem] mt-1 sm:mt-0 dark:group-hover:text-gray-400 transition-all")}>{cardProps.label}</div>
                </div>
                <div className="w-10 h-8 ml-8">
                    <ChevronRight strokeWidth={.9} className={cn("inline-block w-8 h-8 group-hover:text-blue-700 dark:group-hover:text-lime-300 transition-all group-hover:translate-x-3", cardProps.textColor)} />
                </div>
            </Link>
        </div>
    );
}
export default LinkListGetStarted
