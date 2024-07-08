import Link from 'next/link';
import { CareerProps, WeServeProps } from '@/app/interface/client-interface';

const CardWeServe: React.FC<WeServeProps> = (cardProps) => {
    return (
        <div className='flex flex-col justify-evenly border border-black/10 dark:border-white/10 p-10 sm:p-10 rounded-xl bg-white dark:bg-white/[.02] relative '>
            <div className="text-[2.3rem]/[2.5rem] sm:text-[1.6rem] md:text-[1rem] lg:text-[1.7rem] xl:text-[1.8rem]/[2.6rem] font-bold mb-16 sm:mb-6 lg:mb-14">{cardProps.title}</div>
            <div className="text-[1.6rem]/[2rem] sm:text-[1.3rem] md:text-[1rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4rem] mt-4">{cardProps.subTitle}</div>
            <div className="absolute w-6 h-6 bg-blue-700 -left-3 top-[2.9rem] md:-top-3 md:left-14 lg:-top-3 lg:left-10"></div>
        </div>
    );
}


export default CardWeServe;
