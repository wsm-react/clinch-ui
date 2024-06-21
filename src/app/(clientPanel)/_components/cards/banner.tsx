import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CardsProps } from '../_interface/app-interface';
import Link from 'next/link';

import { ArrowRight, ChevronRight, MoveRight } from 'lucide-react';
import BorderdLink from './borderd-link';
import { HighlightKeyword } from '@/utility/function';
import FilledLink from './filled-link';


const CardBanner: React.FC<CardsProps> = (cardProps) => {
    const keyword = "Clinch";
    return (
        <div className="text-center">
            {/* <div className="text-[4.2rem]/[6rem] font-semibold mb-10">{cardProps.title}</div> */}
            <div className="2xl:text-[4.4rem]/[5.6rem] xl:text-[3.6rem]/[5rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-black mb-10">{cardProps.title}</div>
            <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl container">
                <div className="2xl:text-[1.8rem] xl:text-[1.4rem] text-[1rem] text-gray-400">
                    <HighlightKeyword text={cardProps.subTitle} keyword={keyword} />
                </div>
            </div>

            <div className="flex justify-center align-middle mt-20">
                {/* <Link className="sm:text-[1.5rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center hover:text-blue-400 dark:hover:text-cyan-300" href={}><span className="border-b-2 border-blue-400 dark:border-cyan-500 pb-2">{cardProps.linkText}</span> <ChevronRight className="inline-block w-14 h-10 ml-2 mt-1" /></Link> */}
                {/* <FilledLink
                    label={cardProps.linkText}
                    href={`${cardProps.href}`}
                    className={'2xl:text-[1.5rem] xl:text-[1.3rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center hover:text-blue-400 dark:hover:text-cyan-300'}
                    icon={ChevronRight}
                    iconClass={'inline-block w-14 h-10 ml-2 mt-1'}
                /> */}
                <FilledLink
                    label={cardProps.linkText}
                    href={`${cardProps.href}`}
                    icon={MoveRight}
                    className={'sm:text-[1.1rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center font-bold text-white bg-slate-900 hover:bg-blue-700 dark:bg-white dark:text-black hover:dark:bg-blue-600 dark:hover:text-white rounded-full p-[.5rem] pr-10 pl-10'}
                    iconClass={'inline-block w-8 h-10 ml-6'}
                />
            </div>
        </div>
    );
}

export default CardBanner;
