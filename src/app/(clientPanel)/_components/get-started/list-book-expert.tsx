"use client"

import Link from 'next/link';
import { GetStartedLinks, HeadingsProps, HelpYouProps } from '@/app/interface/client-interface';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/_lib/utils';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import LinkListGetStarted from './list-get-started';


const LinkbookExpert: React.FC<HelpYouProps> = (cardProps) => {

    // console.log(cardProps.id);
    const searchParams = useSearchParams();
    const search = searchParams.get('link');

    // console.log(search);


    const getStartedList: GetStartedLinks[] = [
        {
            id: 1,
            title: "Book a FREE call with Our Experts.",
            label: "Choose a day and time of your preference for a FREE pre Investment call",
            href: search || "/get-started",
            textColor: "text-blue-700 font-bold"
        },
        {
            id: 2,
            title: "Let's do it later.",
            label: "I am good , Please call me back as per your schedule ",
            href: "/sign-up",
        }
    ]


    return (
        <div className="pt-10 md:pt-20 pb-40">
            <div className="w-11/12 md:w-7/12 mx-auto px-6">
                <div className="xl:text-[2.4rem]/[2.8rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[2rem]/[2.1rem] font-normal md:font-semibold">{cardProps.title}</div>
                <div className="sm:text-[1.12rem] text-[1rem] mt-5 md:mt-2">{cardProps.content}</div>
            </div>
            <div className="w-11/12 md:w-7/12 mx-auto px-6 mt-16 md:mt-16">
                {getStartedList.map((items, index) => {
                    return (<LinkListGetStarted key={index} title={items.title} label={items.label} href={items.href} textColor={items.textColor} />)
                })}
            </div>
        </div>
    );
}
export default LinkbookExpert
