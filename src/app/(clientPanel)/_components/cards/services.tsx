import Link from 'next/link';
import { OurServicesProps } from '../_interface/app-interface';
import BorderdLink from './borderd-link';
import { ChevronRight } from 'lucide-react';

const CardOurServices: React.FC<OurServicesProps> = (cardProps, ...props) => {
    return (
        <div >
            <div className="asasas">{cardProps.title}</div>
            <div className="asasas">{cardProps.subTitle}</div>
            {/* <div className="asasas">{CardProps.title}</div>
            <div className="asasas">{CardProps.title}</div> */}
            {cardProps.linkText && (
                <div className="flex justify-start align-middle mt-20">
                    <BorderdLink
                        label={cardProps.linkText}
                        href={`${cardProps.href}`}
                        className={'sm:text-[1.2rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center hover:text-blue-400 dark:hover:text-cyan-300'}
                        icon={ChevronRight}
                        classText={"border-b-2 border-green-400 dark:border-cyan-500 pb-2"}
                        iconClass={'inline-block w-12 h-8 ml-2 mt-1'}
                    />
                </div>
            )}

        </div>
    );
}

export default CardOurServices;
