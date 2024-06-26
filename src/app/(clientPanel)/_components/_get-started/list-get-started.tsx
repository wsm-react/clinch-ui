"use client"

import Link from 'next/link';
import CardTestimonial from '../cards/testimonial';
import { GetStartedLinks, TestimonialProps } from '../_interface/app-interface';
import { EscapeSpecialChars, PadWithZero } from '@/utility/function';
import { usePathname } from 'next/navigation';
import { cn } from '@/_lib/utils';
import { ChevronRight, Icon } from 'lucide-react';


const LinkListGetStarted: React.FC<GetStartedLinks> = (cardProps) => {
    const pathName = usePathname();


    const isActive = pathName === cardProps.href;
    const button = cardProps.button;

    return (
        <div className="border-b border-t border-slate-900/10 dark:border-slate-800 mt-[-1px] group">
            <Link href={cardProps.href} className={cn("transition-all focus-visible:ring-[none] pt-6 pb-6 flex flex-row items-center justify-between", button === true ? "rounded-full p-6 pt-3 pb-3" : "")}>
                <div className="asass">
                    <div className={cn("sm:text-[1.4rem] text-[1.2rem] font-semibold group-hover:text-blue-700 dark:text-white dark:group-hover:text-lime-300 transition-all", isActive && "text-blue-700")}>{cardProps.title}</div>
                    <div className="sm:text-[1rem] text-[1rem] mt-1  dark:group-hover:text-gray-400 transition-all">{cardProps.label}</div>
                </div>
                <ChevronRight className="inline-block w-9 h-9 ml-6 group-hover:text-blue-700 dark:group-hover:text-lime-300 transition-all group-hover:translate-x-3" />
            </Link>
        </div>
    );
}
export default LinkListGetStarted
