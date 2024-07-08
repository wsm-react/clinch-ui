"use client"


import { useState } from 'react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { ChevronRight } from 'lucide-react';
import React from 'react';
import { HelpYouAccordionProps, HelpYouProps, HelpYouSectionProps } from '@/app/interface/client-interface';
import { PadWithZero } from '@/utility/function';
import BorderdLink from '../borderd-link';

const FaqsAccordion: React.FC<HelpYouAccordionProps> = (cardProps) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="">
            {/* <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden"> */}

            <Accordion type="single" className="w-full" collapsible>
                {cardProps.data.map((item, index) => {
                    const paddedIndex = PadWithZero(index + 1);
                    return (
                        <AccordionItem key={paddedIndex} value={`item-${paddedIndex}`}>
                            <AccordionTrigger className='text-[1.1rem] text-start font-bold'>{item.title}</AccordionTrigger>
                            <AccordionContent className='text-[1.1rem]'>{item.content}</AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>

    );
}

export default FaqsAccordion;
