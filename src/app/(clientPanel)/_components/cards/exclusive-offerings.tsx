import { ChevronRight } from 'lucide-react';
import { ExclusiveOfferingProps } from '../_interface/app-interface';
import BorderdLink from '../borderd-link';
import Image from 'next/image';

import { HighlightKeyword } from '@/utility/function';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { cn } from '@/_lib/utils';

const CardExclusiveOffering: React.FC<ExclusiveOfferingProps> = (cardProps, props) => {
    return (
        <div className="mt-24 mb-24 md:mt-48 md:mb-48" {...props}>
            {(cardProps.title && cardProps.imgSrc) && <div className="md:text-[2.8rem]/[4rem] text-[2.1rem]/[2.6rem] font-bold mb-8 lg:hidden">{cardProps.title}</div>}
            <div className={cn(cardProps.reversed ? "md:flex-row-reverse" : "md:flex-row", "flex flex-col md:gap-[50]", "justify-between items-center")}>
                {(cardProps.imgSrc) && <div className="w-full md:basis-[40%]">
                    <AspectRatio ratio={1 / 1}>
                        <Image fill src={cardProps.imgSrc} className="rounded-md object-cover" alt={cardProps.imgSrc} />
                    </AspectRatio>
                </div>}
                <div className="w-full md:basis-[45%] md:mt-0 mt-12">
                    {cardProps.title && <div className="2xl:text-[4.1rem]/[5rem] xl:text-[3.2rem]/[4rem] lg:text-[3rem]/[3.6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.4rem]/[2.6rem] font-bold mb-14 max-lg:hidden">{cardProps.title}</div>}
                    {cardProps.subTitle && <div className="sm:text-[1.3rem] xl:text-[1.4rem] md:text-[1.6rem] text-[1.2rem]"> <HighlightKeyword text={cardProps.subTitle} keyword={cardProps.keyword} className='text-gray-800 dark:text-white' /> </div>}
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
                {/* {(cardProps.imgSrc && cardProps.reversed === true) && <div className="w-full md:basis-[40%]">
                    <AspectRatio ratio={1 / 1}>
                        <Image src={cardProps.imgSrc} className="rounded-md object-cover" fill alt={cardProps.imgSrc} />
                    </AspectRatio>
                </div>} */}
            </div>
        </div>
    );
}

export default CardExclusiveOffering;
