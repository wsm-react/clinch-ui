"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GetAvatarName, PadWithZero } from '@/utility/function';
import { HelpYouSectionProps } from '../_interface/app-interface';
import { useState } from 'react';
import { cn } from '@/lib/utils';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import BorderdLink from './borderd-link';
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
            <div className="flex justify-center align-middle mt-20">
                {/* <Link className="sm:text-[1.5rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center hover:text-blue-400 dark:hover:text-cyan-300" href={}><span className="border-b-2 border-blue-400 dark:border-cyan-500 pb-2">{cardProps.linkText}</span> <ChevronRight className="inline-block w-14 h-10 ml-2 mt-1" /></Link> */}
                <BorderdLink
                    label={cardProps.label}
                    href={cardProps.href}
                    className={cardProps.className}
                    icon={ChevronRight}
                    iconClass={cardProps.iconClass}
                />
            </div>
        </div>

    );
}

export default CardHelpYou
