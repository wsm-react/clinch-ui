import Link from 'next/link';
import { OurServicesProps } from '../_interface/app-interface';
import BorderdLink from './borderd-link';
import { ChevronRight } from 'lucide-react';

const CardOurServices: React.FC<OurServicesProps> = (cardProps, ...props) => {
    return (
        <div className='border border-gray-200 dark:border-gray-700 m-2 p-10 rounded-2xl bg-white dark:bg-white/[.02]'>
            <div className="sm:text-[2.6rem] text-[1rem] font-semibold">{cardProps.title}</div>
            <div className="sm:text-[1.3rem] text-[1rem] mt-4">{cardProps.subTitle}</div>
            {cardProps.tags && cardProps.tags.length > 0 && (
                <div className="flex flex-row flex-wrap gap-x-2 gap-y-[.4] mt-12 mb-20">
                    {cardProps.tags.map((tag, index) => (
                        <div key={index} className="mt-2 flex justify-start align-middle gap-x-1 border border-gray-300 dark:border-gray-600 rounded-full p-1 pl-4 pr-4">
                            <div className="text-[1rem] text-gray-600 dark:text-gray-400">{tag.title}</div>
                            <div className="text-[1rem] text-gray-600 dark:text-gray-400">:</div>
                            <div className="text-[1rem] text-gray-600 dark:text-gray-400"> {tag.subTitle}</div>
                        </div>
                    ))}
                </div>
            )}
            {/* <div className="asasas">{CardProps.title}</div>
            <div className="asasas">{CardProps.title}</div> */}
            {cardProps.linkText && (
                <div className="flex justify-start align-middle">
                    <BorderdLink
                        label={cardProps.linkText}
                        href={`${cardProps.href}`}
                        className={'sm:text-[1.2rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center hover:text-blue-600 dark:hover:text-green-300'}
                        icon={ChevronRight}
                        classText={"border-b border-blue-500 dark:border-green-700 pb-1 hover:border-gray-300 dark:hover:border-green-300"}
                        iconClass={'inline-block w-12 h-8 ml-2 mt-1'}
                    />
                </div>
            )}

        </div>
    );
}

export default CardOurServices;
