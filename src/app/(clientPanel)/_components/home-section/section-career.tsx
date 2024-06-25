import Link from 'next/link';
import CardCareer from '../cards/career';
import CardHeadings from '../cards/headings';
import { CareerProps } from '../_interface/app-interface';
import Image from 'next/image';
import { EscapeSpecialChars } from '@/utility/function';
import CareerImg from '/public/career-img.png';
import { PngPath } from '@/utility/constants';

export default function SectionCareer() {

    const cardCareerData: CareerProps[] = [
        {
            id: 1,
            title: "Privacy & cookie notice",
            subTitle: "/text",
        }
    ]

    const description = "While strong financial acumen remains integral to our business, ethics and values are the most essential attributes we look for in our partners. Client trust is our biggest treasury and if you believe in this, we are always looking for right partners.";

    return (
        <div className="dark:bg-background/[.2] pt-32 pb-20 bg-gradient-to-b relative">
            <div className="inset-x-0 top-0 flex justify-center bg-gradient-to-b from-white pt-40 dark:from-black/[.9] absolute"></div>
            <div className="w-11/12 mx-auto px-4 sm:px-3 md:px-5 text-center ">
                <div className="text-[3.2rem]/[5.6rem] font-bold">Career</div>
                <div className="flex align-middle justify-center">
                    <Image src={PngPath.careerImg} width={460} height={0} className='h-auto pt-5 pb-5' loading="lazy" alt='' />
                </div>
            </div>
            <div className="container max-w-screen-lg text-center mt-16">
                <p className='sm:text-[1.9rem] text-[1.3rem]'>
                    {EscapeSpecialChars(description)}
                </p>
            </div>
        </div>
    );
}
