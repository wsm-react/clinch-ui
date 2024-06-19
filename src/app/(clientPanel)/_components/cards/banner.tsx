import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BannerProps } from '../_interface/app-interface';
import Link from 'next/link';

import { ArrowRight, ChevronRight } from 'lucide-react';
import BorderdLink from './borderd-link';
import HighlightKeyword from '@/utility/function';


const CardBanner: React.FC<BannerProps> = (cardProps) => {
    const keyword = "Clinch";
    return (
        <div className="text-center">
            {/* <div className="text-[4.2rem]/[6rem] font-semibold mb-10">{cardProps.title}</div> */}
            <div className="xl:text-[4.4rem]/[5.6rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-semibold mb-10">{cardProps.title}</div>
            <div className="sm:text-[1.8rem] text-[1rem] text-gray-400">
                <HighlightKeyword text={cardProps.subTitle} keyword={keyword} />

                {/* {subTitleParts.map((part, index) =>
                    part.toLowerCase() === keyword.toLowerCase() ? (
                        <div key={index} className="font-extrabold inline">
                            {part}
                        </div>
                    ) : (part)
                )} */}
            </div>

            <div className="flex justify-center align-middle mt-20">
                {/* <Link className="sm:text-[1.5rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center hover:text-blue-400 dark:hover:text-cyan-300" href={}><span className="border-b-2 border-blue-400 dark:border-cyan-500 pb-2">{cardProps.linkText}</span> <ChevronRight className="inline-block w-14 h-10 ml-2 mt-1" /></Link> */}
                <BorderdLink
                    label={cardProps.linkText}
                    href={`${cardProps.href}`}
                    className={'sm:text-[1.5rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center hover:text-blue-400 dark:hover:text-cyan-300'}
                    icon={ChevronRight}
                    iconClass={'inline-block w-14 h-10 ml-2 mt-1'}
                />
            </div>
        </div>
    );
}

export default CardBanner;
