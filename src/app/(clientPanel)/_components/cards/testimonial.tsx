"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GetAvatarName, PadWithZero } from '@/utility/function';
import { TestimonialSectionProps } from '../_interface/app-interface';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const CardTestimonial: React.FC<TestimonialSectionProps> = ({ data }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="container max-w-screen-2xl relative">
            {/* <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden"> */}
            <div className={cn("grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden", isActive ? null : 'max-h-[36rem]')}>
                {data.map((item, index) => {
                    const paddedIndex = PadWithZero(index + 1);

                    return (
                        <div key={paddedIndex} className="border border-gray-200 dark:border-gray-700 p-10 rounded-2xl bg-white dark:bg-white/[.02]">
                            <div className="flex items-center space-x-6">
                                <Avatar className='w-14 h-14 bg-slate-600 dark:bg-slate-100 border-0'>
                                    <AvatarImage src={item.imgSrc} alt={item.imgAlt} />
                                    <AvatarFallback className='bg-slate-600 dark:bg-slate-600 border-0'>{GetAvatarName(item.name)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <p className="text-[.7rem] text-muted-foreground text-ellipsis line-clamp-1">1 month ago</p>
                                    <p className="font-medium leading-none text-ellipsis line-clamp-1 ">{item.name}</p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Send notifications to device.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-10">{item.message}</div>
                        </div>
                    )
                })}
            </div>
            <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-900 absolute">
                <button type="button" onClick={handleClick} className="relative bg-slate-900 hover:bg-slate-700 focus-visible:ring-[none] text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto">Show more...</button>
            </div>
        </div>

    );
}

export default CardTestimonial
