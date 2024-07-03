import Link from 'next/link';
import { OurServicesProps } from '../_interface/app-interface';
import BorderdLink from '../borderd-link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/_lib/utils';

const CardOurServices: React.FC<OurServicesProps> = (cardProps) => {
    return (
        <div className={
            cn(
                // "border  p-6 sm:p-11 rounded-2xl border-gray-100 dark:border-white/[.02]",
                "p-6 sm:p-11 rounded-2xl purple",
                cardProps.bgLight ? cardProps.bgLight : "border border-gray-100 dark:border-white/[.02]",
                // cardProps.bgDark ? `dark:${cardProps.bgDark}` : "dark:bg-white/[.01]"
                // cardProps.bgDark ? `bg-gradient-to-r from-${cardProps.bgDark}/[.8] to-${cardProps.bgDark}/[.01]` : "bg-gradient-to-r from-blue-500/[.2] to-purple-500/[.01]"
                cardProps.bgDark ? cardProps.bgDark : "bg-gradient-to-r from-blue-500/[.2] to-purple-500/[.01]"
            )}>
            <div className="sm:text-[2.6rem] text-[2.8rem]/[3.4rem] font-semibold">{cardProps.title}</div>
            <div className="sm:text-[1.3rem] text-[1rem] mt-4">{cardProps.subTitle}</div>
            {cardProps.tags && cardProps.tags.length > 0 && (
                <div className="flex flex-row flex-wrap gap-x-2 gap-y-[.4] mt-12 mb-20">
                    {cardProps.tags.map((tag, index) => (
                        <div key={index} className="mt-2 flex justify-start align-middle gap-x-1 border border-gray-300 dark:border-gray-700 rounded-full p-[.4rem] pl-4 pr-4">
                            <div className="text-[.9rem] text-gray-600 dark:text-gray-400">{tag.title}</div>
                            <div className="text-[.9rem] text-gray-600 dark:text-gray-400">:</div>
                            <div className="text-[.9rem] text-gray-600 dark:text-gray-400 "> {tag.subTitle}</div>
                        </div>
                    ))}
                </div>
            )}
            {/* <div className="asasas">{CardProps.title}</div>
            <div className="asasas">{CardProps.title}</div> */}
            {cardProps.linkText &&
                <BorderdLink
                    label={cardProps.linkText}
                    href={cardProps.href}
                    containerClass='flex justify-start align-middle'
                    className={'sm:text-[1.2rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center hover:text-blue-600 dark:hover:text-green-300'}
                    icon={ChevronRight}
                    labelClassName={"border-b border-blue-500 dark:border-green-700 pb-1 hover:border-gray-300 dark:hover:border-green-300"}
                    iconClass={'inline-block w-12 h-8 ml-2 mt-1'}
                />}

        </div>
    );
}

export default CardOurServices;
