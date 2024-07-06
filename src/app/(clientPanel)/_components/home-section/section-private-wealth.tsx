"use client"

import { CareerProps } from '../_interface/app-interface';
import { MoveRight } from 'lucide-react';
import FilledLink from '../filled-link';

import { useEffect, useState } from 'react';
import { cn } from '@/_lib/utils';
import CardPrivateWealth from '../cards/private-wealth';



export default function SectionPrivateWealth({ searchParams }: { searchParams?: { query?: string; page?: string } }) {

    const sectionData: CareerProps = {
        id: 1,
        title: "Private wealth for all",
        subTitle: "As you embark on the journey of wealth creation, Clinch helps you achieve desired wealth with lasting legacy, Enable you to make choices that matter the most, courage to live widest dreams. Clinch a trustworthy partner who wouldn't leave your money on the brink of a cliff to fall. Let's build a legacy that stands the test of time.",
        label: "Let's begin the journey",
        href: "/get-started",
        icon: MoveRight
    }

    // const words = sectionData.subTitle.split(' ');

    // const [activeWordIndex, setActiveWordIndex] = useState<number>(0);

    // const { ref: textRef, inView, entry } = useInView({
    //     threshold: 0.5,
    //     initialInView: true,
    //     delay: 0
    // });

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (entry) {
    //             const scrollY = window.scrollY;
    //             const screenHeight = window.innerHeight;
    //             const elementTop = entry.target.getBoundingClientRect().top + scrollY;
    //             const elementHeight = entry.target.getBoundingClientRect().height;

    //             const elementBottom = elementTop + elementHeight;
    //             const adjustedScrollPosition = scrollY + screenHeight / 2;

    //             // Calculate the distance between the top of the element and the middle of the screen
    //             const distanceFromTop = adjustedScrollPosition - elementTop;

    //             // Calculate the total scrollable distance within the element
    //             const totalScrollableDistance = elementBottom - screenHeight / 3 - (elementTop + screenHeight / 3);

    //             // Calculate the scroll progress as a percentage
    //             const scrollProgress = (distanceFromTop / totalScrollableDistance) * 100;

    //             // Determine the index of the active word based on the scroll progress
    //             const newIndex = Math.min(
    //                 Math.max(
    //                     Math.floor((scrollProgress / 100) * (words.length / 2)),
    //                     0
    //                 ),
    //                 Math.ceil(words.length) - 1
    //             );

    //             setActiveWordIndex(newIndex);
    //         }
    //     };

    //     // Initial call to handle scroll to set active index on load
    //     handleScroll();

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [entry, words.length]);

    return (
        <div className="dark:bg-gray-900/30 md:pt-32 md:pb-32 pt-24 pb-24">
            <div className="container max-w-screen-sm">
                <div className="sm:text-[1.46rem]/[3rem] text-[1.22rem]/[3.6rem] uppercase space-x-4 tracking-[.25em]">{sectionData.title}</div>
            </div>
            <CardPrivateWealth
                title={sectionData.title}
                subTitle={sectionData.subTitle}
                href={sectionData.href}
                label={sectionData.label}
            />
        </div>
    );
}
