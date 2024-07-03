"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GetAvatarName, PadWithZero } from '@/utility/function';
import { HelpYouSectionProps } from '../_interface/app-interface';
import { useState } from 'react';
import { cn } from '@/_lib/utils';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import BorderdLink from '../borderd-link';
import { ChevronRight } from 'lucide-react';

const CardHelpYou: React.FC<HelpYouSectionProps> = (cardProps) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="">
            {/* <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden"> */}
            <Accordion type="single" className="w-full">
                {cardProps.data.map((item, index) => {
                    const paddedIndex = PadWithZero(index + 1);
                    return (
                        <AccordionItem key={paddedIndex} value={`item-${paddedIndex}`}>
                            <AccordionTrigger className='text-[1.2rem] text-start font-bold'>{item.title}</AccordionTrigger>
                            <AccordionContent>{item.content}</AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
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
