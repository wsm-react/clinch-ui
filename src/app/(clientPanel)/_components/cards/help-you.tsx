"use client"

import { HelpYouSectionProps } from '@/app/interface/client-interface';
import { useState } from 'react';


import BorderdLink from '../borderd-link';
import { ChevronRight } from 'lucide-react';
import FaqsAccordion from './faqs-accordion';

const CardHelpYou: React.FC<HelpYouSectionProps> = (cardProps) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="">
            {/* <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden"> */}
            <FaqsAccordion data={cardProps.data} />
            <BorderdLink
                label={cardProps.label}
                href={cardProps.href}
                className={cardProps.className}
                icon={ChevronRight}
                containerClass='flex justify-center align-middle mt-20'
                iconClass={cardProps.iconClass}
            />
        </div>

    );
}

export default CardHelpYou
