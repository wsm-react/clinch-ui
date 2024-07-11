"use client"

import FilledLink from '../filled-link';

import { CardsProps } from '@/app/interface/client-interface';
import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromBottom } from '@/_lib/motion';
import { HighlightAnmiKeyword } from '@/_lib/function';


const CardBanner: React.FC<CardsProps> = (cardProps) => {

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="sm:text-center">
            {cardProps.title && <motion.div
                variants={slideInFromTop({ delay: 0.5, yAxis: 10 })}
                className="2xl:text-[4.4rem]/[5.6rem] xl:text-[3.6rem]/[5rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[4.2rem]/[4.1rem] font-black mb-10">{cardProps.title}</motion.div>}
            {cardProps.subTitle && <motion.div variants={slideInFromBottom({ delay: 0.5, yAxis: 20 })} className="max-w-fit sm:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
                <div className="2xl:text-[1.8rem] xl:text-[1.4rem] text-[1.3rem] text-gray-400">
                    {/* <HighlightKeyword animateKeyword={cardProps.animateKeyword} text={cardProps.subTitle} keyword={cardProps.keyword} /> */}
                    <HighlightAnmiKeyword text={cardProps.subTitle} replaceText={cardProps.replaceText} animateKeywords={cardProps.animateKeywords} keyword={cardProps.keyword} />
                </div>
            </motion.div>}

            {cardProps.linkText && <motion.div variants={slideInFromBottom({ delay: 0.5, yAxis: -50 })} ><FilledLink
                label={cardProps.linkText}
                href={cardProps.href}
                // icon={MoveRight}
                containerClass='flex justify-start sm:justify-center align-middle mt-20'
                className={'sm:text-[1.1rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center font-bold text-white bg-slate-900 hover:bg-blue-700 dark:bg-white dark:text-black hover:dark:bg-blue-600 dark:hover:text-white rounded-full p-[.8rem] pr-10 pl-10 transition-all'}
                iconClass={'inline-block w-8 h-10 ml-6'}
            /></motion.div>}
        </motion.div>
    );
}

export default CardBanner;
