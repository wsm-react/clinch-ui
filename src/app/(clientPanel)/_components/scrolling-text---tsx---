"use client"

import { cn } from '@/_lib/utils';
// components/ScrollingText.tsx

import { useEffect, useRef, useState } from 'react';

interface ScrollingTextProps {
    text: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ text }) => {
    const textRef = useRef<HTMLDivElement | null>(null);
    const [activeWordIndex, setActiveWordIndex] = useState<number>(0);
    const words = text.split(' ');

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const scrollPosition = window.scrollY;
                const screenHeight = window.innerHeight;
                const elementPosition = textRef.current.getBoundingClientRect().top + window.scrollY;
                const adjustedScrollPosition = scrollPosition + screenHeight / 3;
                const newIndex = Math.min(
                    Math.max(
                        Math.floor((adjustedScrollPosition - elementPosition) / 20), // Adjust this value to change the speed of color change
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

    }, [words.length]);

    return (
        <div ref={textRef} >
            {words.map((word, index) => {
                const isActive = index < (activeWordIndex + 1) * 3;
                return (
                    <span
                        key={index}
                        className={cn(" transition ease-in", isActive ? 'text-gray-200 font-semibold' : 'text-gray-800')}
                    >
                        {word}{' '}
                    </span>
                );
            })}
        </div>
    );
};

export default ScrollingText;
