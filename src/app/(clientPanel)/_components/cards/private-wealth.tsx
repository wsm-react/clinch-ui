import { cn } from '@/_lib/utils';
import { CareerProps } from '@/app/interface/client-interface';
import FilledLink from '../filled-link';
import { useState, useEffect, Fragment, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { slideInFromLeft, slideInFromBottom } from '@/_lib/motion';


const CardPrivateWealth: React.FC<CareerProps> = (cardProps) => {
    const words = cardProps.subTitle.split(' ');
    const [activeWordIndex, setActiveWordIndex] = useState<number>(0);
    const controls = useAnimation();
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const { top, height } = textRef.current.getBoundingClientRect();
                const scrollY = window.scrollY;
                const screenHeight = window.innerHeight;
                const elementTop = top + scrollY;
                const adjustedScrollPosition = scrollY + screenHeight / 1.4;

                const distanceFromTop = adjustedScrollPosition - elementTop;
                const totalScrollableDistance = elementTop + height - screenHeight / 5 - (elementTop + screenHeight / 3);

                const scrollProgress = (distanceFromTop / totalScrollableDistance) * 100;
                const newIndex = Math.min(Math.max(Math.floor((scrollProgress / 100) * (words.length / 2)), 0), words.length - 1);


                setActiveWordIndex(newIndex);

                controls.start(i => ({
                    opacity: i < newIndex * 1.3 ? 1 : 0.3,
                    transition: { delay: i * 0.001 }
                }));
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [words.length, controls]);

    return (
        <motion.div initial="hidden" animate="visible">
            <div className="container max-w-screen-sm">
                <motion.div variants={slideInFromLeft({ delay: 0.5, yAxis: -20 })} className="sm:text-[1.46rem]/[3rem] text-[1.22rem]/[3.6rem] uppercase space-x-4 tracking-[.25em]">{cardProps.title}</motion.div>
            </div>
            <div className="container max-w-screen-sm md:mt-10 mt-4" ref={textRef}>
                <div className="xl:text-[2.38rem]/[3.4rem] lg:text-[1.3rem] text-[2.3rem]/[3.4rem]">
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            className={cn(
                                "transition ease-in-out",
                                index < activeWordIndex * 1.4
                                    ? 'dark:text-gray-200 text-gray-900 font-semibold font-serif'
                                    : 'dark:text-gray-500 text-gray-200'
                            )}
                            initial={{ opacity: .5 }}
                            animate={controls}
                            custom={index}
                        >
                            {word}{' '}
                        </motion.span>
                    ))}
                </div>
                <motion.div variants={slideInFromBottom({ delay: 0.5, yAxis: -50 })} >
                    <FilledLink
                        label={cardProps.label}
                        href={cardProps.href}
                        icon={cardProps.icon}
                        containerClass="flex justify-start align-middle mt-20"
                        className="sm:text-[1.1rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center font-bold text-white bg-slate-900 hover:bg-blue-700 dark:bg-white dark:text-black hover:dark:bg-blue-600 dark:hover:text-white rounded-full p-[.32rem] pr-10 pl-10 transition-all"
                        iconClass="inline-block w-8 h-10 ml-6"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}


export default CardPrivateWealth;
