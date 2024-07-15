import { ChevronRight } from 'lucide-react';
import { ExclusiveOfferingProps, ExclusiveProductsProps } from '@/app/interface/client-interface';
import BorderdLink from '../borderd-link';
import Image from 'next/image';

import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { cn } from '@/_lib/utils';
import { HighlightKeyword } from '@/_lib/function';

const CardExclusiveOffering: React.FC<ExclusiveProductsProps> = (cardProps, props) => {
    return (
        <div className="mt-28 mb-28 md:mt-48 md:mb-48 min-h-[calc(100vh-100px)]" {...props}>
            {/* {(cardProps.title && cardProps.imgSrc) && <div className="md:text-[2.8rem]/[4rem] text-[2.1rem]/[2.6rem] font-bold mb-8 lg:hidden">{cardProps.title}</div>} */}
            <div className={cn(cardProps.reversed ? "md:flex-row-reverse" : "md:flex-row", "flex flex-col", "justify-between items-start")}>
                {(cardProps.imgSrc) && <div className="w-full md:basis-[47%]">
                    <AspectRatio ratio={1 / 1} className={cn('md:rounded-[3.6rem]', cardProps.shadow)}>
                        <Image fill src={cardProps.imgSrc} className="object-cover md:rounded-[3.6rem]" alt={cardProps.imgSrc} />
                    </AspectRatio>
                </div>}
                <div className="w-full md:basis-[42%] md:mt-12 mt-10">
                    {/* {cardProps.title && <div className="2xl:text-[4.1rem]/[5rem] xl:text-[3.2rem]/[4rem] lg:text-[3rem]/[3.6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.4rem]/[2.6rem] font-bold mb-14 max-lg:hidden">{cardProps.title}</div>} */}
                    {cardProps.title && <div className="xl:text-[3.2rem]/[4rem] lg:text-[3rem]/[3.6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[2.2rem]/[2.7rem] font-semibold mb-8 md:mb-14">{cardProps.title}</div>}
                    {cardProps.subTitle && <div className="sm:text-[1.3rem] xl:text-[1.4rem] md:text-[1.6rem] text-[1.2rem]"> <HighlightKeyword text={cardProps.subTitle} keyword={cardProps.keyword} className='text-gray-800 dark:text-white' /> </div>}
                    {/* {cardProps.type && <div className="mt-8"><span className='border-2 border-gray-300 dark:border-gray-700 rounded-full p-[.4rem] pl-4 pr-4 text-gray-800 dark:text-gray-300'><HighlightKeyword text={cardProps.type} keyword={cardProps.keyword} className='' /></span></div>} */}

                    {cardProps.tags && cardProps.tags.length > 0 && (
                        <div className="flex flex-row flex-wrap gap-x-2 gap-y-[.4] mt-12 mb-20">
                            {cardProps.tags.map((tag, index) => (
                                <div key={index} className="mt-2 flex justify-start align-middle gap-x-1 border border-gray-300 dark:border-gray-700 rounded-full p-[.4rem] pl-4 pr-4">
                                    {tag.title && <div className="text-[.9rem] text-gray-600 dark:text-gray-400">{tag.title}</div>}
                                    {tag.subTitle && <div className="text-[.9rem] text-gray-600 dark:text-gray-400 "> {tag.subTitle}</div>}
                                </div>
                            ))}
                        </div>
                    )}

                    {cardProps.linkText && <BorderdLink
                        label={cardProps.linkText}
                        href={cardProps.href}
                        containerClass='flex justify-start align-middle mt-8 md:mt-20'
                        className={'sm:text-[1.2rem] xl:text-[1.4rem] text-[1rem] font-semibold flex flex-row items-center hover:text-blue-600 dark:hover:text-green-300'}
                        icon={ChevronRight}
                        labelClassName={"border-b-2 border-blue-500 dark:border-green-700 pb-2 hover:border-gray-300 dark:hover:border-green-300"}
                        iconClass={'inline-block w-12 h-10 ml-2 mt-1'}
                    />}
                </div>
            </div>
        </div>
    );
}

export default CardExclusiveOffering;
