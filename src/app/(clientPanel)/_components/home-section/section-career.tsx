import Link from 'next/link';
import CardCareer from '../cards/career';
import CardHeadings from '../cards/headings';
import { CareerProps } from '../_interface/app-interface';
import Image from 'next/image';
import { EscapeSpecialChars } from '@/utility/function';

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
        <div className="dark:bg-black/[.2] pt-40 pb-20 bg-gradient-to-b relative">
            <div className="inset-x-0 top-0 flex justify-center bg-gradient-to-b from-white pt-40 dark:from-black/[.9] absolute"></div>

            <div className="w-11/12 mx-auto  px-4 sm:px-3 md:px-5 text-center ">
                <div className="xl:text-[3.2rem]/[5.6rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-semibold">Career</div>
                <div className="flex align-middle justify-center">
                    <Image src={"/career-img.png"} width={460} height={100} alt='' />
                </div>
            </div>
            <div className="container max-w-screen-lg text-center">
                <p className='sm:text-[1.7rem] text-[1rem]'>
                    {EscapeSpecialChars(description)}
                </p>
            </div>
        </div>
    );
}
