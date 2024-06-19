import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { WealthManagerProps } from '../_interface/app-interface';
import Image from 'next/image';
import Link from 'next/link';
import { highlightKeyword } from '@/utility/function';
import { ArrowRight, ChevronRight } from 'lucide-react';
import BorderdLink from './borderd-link';


const CardWealthManager: React.FC<WealthManagerProps> = (cardProps, props) => {
    return (
        <div className="asas" {...props}>
            <div className="xl:text-[4.1rem]/[5rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-bold mb-14 lg:hidden">{cardProps.title}</div>
            <div className="flex flex-row gap-[50] justify-between items-center">
                <div className="basis-[45%] md:basis-[40%] lg:basis-[45%] xl:basis-[45%] 2xl:basis-[43%]">
                    <div className="2xl:text-[4.1rem]/[5rem] xl:text-[3.8rem]/[5rem] lg:text-[3rem]/[3.6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-bold mb-14 max-lg:hidden">{cardProps.title}</div>
                    <div className="sm:text-[1.3rem] md:text-[1.6rem] text-[1rem]">{cardProps.subTitle}</div>
                    <div className="flex justify-start align-middle mt-24 max-sm:mt-6">
                        <BorderdLink
                            label={cardProps.linkText}
                            href={`${cardProps.href}`}
                            className={'sm:text-[1.6rem] text-[.9rem] focus-visible:ring-[none] flex flex-row items-center hover:text-blue-600 dark:hover:text-green-300'}
                            icon={ChevronRight}
                            classText={"border-b-2 border-blue-500 dark:border-green-700 pb-2 hover:border-gray-300 dark:hover:border-green-300"}
                            iconClass={'inline-block w-12 h-10 ml-2 mt-1'}
                        />
                    </div>
                </div>
                <div className="basis-[45%] md:basis-[40%] lg:basis-[45%] xl:basis-[42%] 2xl:basis-[36%]">
                    <Image src={cardProps.imgSrc} alt={cardProps.imgSrc} width={800} height={800} sizes='100vh' />
                </div>
            </div>
        </div>
    );
}

export default CardWealthManager;
