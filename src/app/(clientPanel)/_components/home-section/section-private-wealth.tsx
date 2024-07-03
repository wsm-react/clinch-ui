import Link from 'next/link';
import CardExclusiveProducts from '../cards/exclusive-products';
import { CareerProps } from '../_interface/app-interface';
import BorderdLink from '../borderd-link';
import { ChevronRight, MoveRight } from 'lucide-react';
import FilledLink from '../filled-link';
import ScrollingText from '../scrolling-text';



export default function SectionPrivateWealth({ searchParams }: { searchParams?: { query?: string; page?: string } }) {

    const sectionData: CareerProps = {
        id: 1,
        title: "Private wealth for all",
        subTitle: "As you embark on the journey of wealth creation, Clinch helps you achieve desired wealth with lasting legacy, Enable you to make choices that matter the most, courage to live widest dreams. Clinch a trustworthy partner who wouldn't leave your money on the brink of a cliff to fall. Let's build a legacy that stands the test of time.",
        label: "Let's begin the journey",
        href: "/get-started",
        icon: MoveRight
    }


    return (
        <div className="dark:bg-gray-900/30 md:pt-32 md:pb-32 pt-24 pb-24">
            <div className="container max-w-screen-sm">
                <div className="sm:text-[1.46rem]/[3rem] text-[1.22rem]/[3.6rem] uppercase space-x-4 tracking-[.2em]">{sectionData.title}</div>
            </div>
            <div className="container max-w-screen-sm md:mt-10 mt-4 ">
                <div className="xl:text-[2.38rem]/[3.4rem] lg:text-[1.3rem] text-[2.3rem]/[3.4rem]"><ScrollingText text={sectionData.subTitle} /></div>

                <div className="flex justify-start align-middle mt-20">
                    <FilledLink
                        label={sectionData.label}
                        href={sectionData.href}
                        icon={sectionData.icon}
                        className={'sm:text-[1.1rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center font-bold text-white bg-slate-900 hover:bg-blue-700 dark:bg-white dark:text-black hover:dark:bg-blue-600 dark:hover:text-white rounded-full p-[.32rem] pr-10 pl-10 transition-all'}
                        iconClass={'inline-block w-8 h-10 ml-6'}
                    />
                </div>
            </div>
        </div>
    );
}
