"use client"

import { cn } from '@/_lib/utils';
// components/ScrollingText.tsx

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollingTextProps {
    text: string;
}


const ScrollingText: React.FC<ScrollingTextProps> = ({ text }) => {
    const words = text.split(' ');
    const [activeWordIndex, setActiveWordIndex] = useState<number>(0);

    const { ref: textRef, inView, entry } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (entry) {
                const scrollY = window.scrollY;
                const screenHeight = window.innerHeight;
                const elementTop = entry.target.getBoundingClientRect().top + scrollY;
                const elementHeight = entry.target.getBoundingClientRect().height;

                const elementBottom = elementTop + elementHeight;
                const adjustedScrollPosition = scrollY + screenHeight / 2;

                // Calculate the distance between the top of the element and the middle of the screen
                const distanceFromTop = adjustedScrollPosition - elementTop;
                const distanceFromBottom = elementBottom - adjustedScrollPosition;

                // Calculate the total scrollable distance within the element
                const totalScrollableDistance = elementBottom - screenHeight / 2 - (elementTop + screenHeight / 2);

                // Calculate the scroll progress as a percentage
                const scrollProgress = (distanceFromTop / totalScrollableDistance) * 100;

                // Determine the index of the active word based on the scroll progress
                const newIndex = Math.min(
                    Math.max(
                        Math.floor((scrollProgress / 100) * (words.length / 3)),
                        0
                    ),
                    Math.ceil(words.length / 3) - 1
                );

                setActiveWordIndex(newIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [entry, words.length]);

    return (
        <div className="xl:text-[2.38rem]/[3.4rem] lg:text-[1.3rem] text-[2.3rem]/[3.4rem]" ref={textRef}>
            {words.map((word, index) => {
                const isActive = index < (activeWordIndex + 1) * 3;
                return (
                    <span key={index} className={cn("transition ease-in", isActive ? 'text-gray-200 font-semibold' : 'text-gray-800')}>
                        {word}{' '}
                    </span>
                );
            })}
        </div>
    );
};

export default ScrollingText;
