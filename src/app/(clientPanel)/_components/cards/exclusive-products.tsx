import { ChevronRight } from 'lucide-react';
import { ExclusiveProductsProps, WealthManagerProps } from '../_interface/app-interface';
import BorderdLink from './borderd-link';
import Image from 'next/image';

import { text } from 'stream/consumers';
import { HighlightKeyword } from '@/utility/function';



const CardExclusiveProducts: React.FC<ExclusiveProductsProps> = (cardProps, props) => {
    return (
        <div className="mt-48 mb-48" {...props}>
            {(cardProps.title && cardProps.imgSrc) && <div className="xl:text-[4.1rem]/[5rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-bold mb-14 lg:hidden">{cardProps.title}</div>}
            <div className="flex flex-row gap-[50] justify-between items-center">
                {(cardProps.imgSrc && cardProps.reversed === undefined) && <div className="basis-[45%] md:basis-[40%] lg:basis-[45%] xl:basis-[32%] 2xl:basis-[32%]">
                    <Image src={cardProps.imgSrc} alt={cardProps.imgSrc} width={800} height={800} sizes='100vh' />
                </div>}
                <div className="basis-[45%] md:basis-[40%] lg:basis-[45%] xl:basis-[50%] 2xl:basis-[43%]">
                    {cardProps.title && <div className="2xl:text-[4.1rem]/[5rem] xl:text-[3.2rem]/[4rem] lg:text-[3rem]/[3.6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-bold mb-14 max-lg:hidden">{cardProps.title}</div>}
                    {cardProps.subTitle && <div className="sm:text-[1.3rem] xl:text-[1.4rem] md:text-[1.6rem] text-[1rem]"> <HighlightKeyword text={cardProps.subTitle} keyword={cardProps.keyword} className='text-gray-800 dark:text-white' /> </div>}
                    {cardProps.linkText && <div className="flex justify-start align-middle mt-24 max-sm:mt-6">
                        <BorderdLink
                            label={cardProps.linkText}
                            href={`${cardProps.href}`}
                            className={'sm:text-[1.2rem] xl:text-[1.4rem] text-[.9rem] focus-visible:ring-[none] font-semibold flex flex-row items-center hover:text-blue-600 dark:hover:text-green-300'}
                            icon={ChevronRight}
                            labelClassName={"border-b-2 border-blue-500 dark:border-green-700 pb-2 hover:border-gray-300 dark:hover:border-green-300"}
                            iconClass={'inline-block w-12 h-10 ml-2 mt-1'}
                        />
                    </div>}
                </div>
                {(cardProps.imgSrc && cardProps.reversed === true) && <div className="basis-[45%] md:basis-[40%] lg:basis-[45%] xl:basis-[32%] 2xl:basis-[32%]">
                    <Image src={cardProps.imgSrc} alt={cardProps.imgSrc} width={800} height={800} sizes='100vh' />
                </div>}
            </div>
        </div>
    );
}

export default CardExclusiveProducts;
