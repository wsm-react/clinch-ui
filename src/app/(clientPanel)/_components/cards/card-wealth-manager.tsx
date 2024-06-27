import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/_lib/utils"
import { WealthManagerProps } from '../_interface/app-interface';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, MoveRight } from 'lucide-react';
import BorderdLink from '../borderd-link';
import FilledLink from '../filled-link';


const CardWealthManager: React.FC<WealthManagerProps> = (cardProps, props) => {
    return (
        <div className='' {...props}>
            <div className="sm:text-[2.2rem]/[3rem] text-[4rem]/[3.8rem] font-bold mb-14 lg:hidden">{cardProps.title}</div>
            <div className="flex flex-col md:flex-row gap-[50] justify-between items-center">
                <div className="basis-[45%] md:basis-[40%] lg:basis-[45%] xl:basis-[32%] 2xl:basis-[47%] mb-12 sm:mb-0 ">
                    <Image src={cardProps.imgSrc} alt={cardProps.imgSrc} width={800} height={800} sizes='100vh' />
                    {/* className='rounded-2xl' */}
                </div>
                <div className="basis-[45%] md:basis-[40%] lg:basis-[45%] xl:basis-[45%] 2xl:basis-[43%]">
                    <div className="2xl:text-[4.4rem]/[4.4rem] xl:text-[3.2rem]/[3.3rem] lg:text-[3rem]/[3.6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-bold mb-14 max-lg:hidden">{cardProps.title}</div>
                    <div className="sm:text-[1.1rem] xl:text-[1.3rem] md:text-[1.6rem] text-[1.2rem]">{cardProps.subTitle}</div>
                    <div className="flex justify-start align-middle mt-16 sm:mt-24">
                        {/* <BorderdLink
                            label={cardProps.linkText}
                            href={`${cardProps.href}`}
                            className={'sm:text-[1.6rem] text-[1.2rem] focus-visible:ring-[none] flex flex-row items-center font-bol hover:text-blue-600 dark:hover:text-green-300'}
                            icon={ChevronRight}
                            labelClassName={"border-b-2 border-blue-500 dark:border-green-700 pb-2 hover:border-gray-300 dark:hover:border-green-300"}
                            iconClass={'inline-block w-12 h-10 ml-2 mt-1'}
                        /> */}

                        <FilledLink
                            label={cardProps.linkText}
                            href={`${cardProps.href}`}
                            icon={MoveRight}
                            className={'sm:text-[1.1rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center font-bold text-white bg-slate-900 hover:bg-blue-700 dark:bg-white dark:text-black hover:dark:bg-blue-600 dark:hover:text-white rounded-full p-[.32rem] pr-10 pl-10 transition-all'}
                            iconClass={'inline-block w-8 h-10 ml-6'}
                        />
                    </div>
                </div>
                {/* <div className="basis-[45%] md:basis-[40%] lg:basis-[45%] xl:basis-[45%] 2xl:basis-[36%]"></div> */}

            </div>
        </div>
    );
}

export default CardWealthManager;
