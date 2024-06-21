import Link from 'next/link';
import CardExclusiveProducts from '../cards/exclusive-products';
import { CareerProps } from '../_interface/app-interface';
import BorderdLink from '../cards/borderd-link';
import { ChevronRight, MoveRight } from 'lucide-react';
import FilledLink from '../cards/filled-link';

export default function SectionRegisterNow() {

    const CardCareerData: CareerProps[] = [
        {
            id: 1,
            title: "Privacy & cookie notice",
            subTitle: "/text",
        }
    ]
    return (
        <div className="bg-background/20 backdrop-blur pt-20 pb-20">
            <div className="container max-w-screen-2xl xl:max-w-screen-xl mb-10 text-center">
                <div className="xl:text-[3.2rem]/[5rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-semibold">This program is for you?</div>
            </div>
            <div className="container max-w-screen-xl text-center">
                <div className="sm:text-[1.8rem] text-[1rem]">While strong financial acumen remains integral to our business, ethics and values are the most essential attributes we look for in our partners. Client trust is our biggest treasury and if you believe in this, we are always looking for right partners.</div>
                <div className="flex justify-center align-middle mt-20">
                    {/* <Link className="sm:text-[1.5rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center hover:text-blue-400 dark:hover:text-cyan-300" href={}><span className="border-b-2 border-blue-400 dark:border-cyan-500 pb-2">{cardProps.linkText}</span> <ChevronRight className="inline-block w-14 h-10 ml-2 mt-1" /></Link> */}
                    <FilledLink
                        label={"Register Now"}
                        href={"/get-started"}
                        icon={MoveRight}
                        className={'sm:text-[1.1rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center font-bold text-white bg-slate-900 hover:bg-blue-700 dark:bg-white dark:text-black hover:dark:bg-blue-600 dark:hover:text-white rounded-full p-[.32rem] pr-10 pl-10'}
                        iconClass={'inline-block w-8 h-10 ml-6'}
                    />
                </div>
            </div>
        </div>
    );
}
