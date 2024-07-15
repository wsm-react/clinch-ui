import Link from 'next/link';
import { OurServicesProps, WeServeProps } from '@/app/interface/client-interface';
import CardWeServe from '../cards/we-serve';
import AppPageWrapper from '../animation/app-wrapper';
import AppSectionWrapper from '../animation/app-wrapper';


export default function SectionServe() {

    const weServeData: WeServeProps[] = [
        {
            title: "No hidden catches",
            subTitle: "Benefits that work the way you thought they would.",
        },
        {
            title: "Driven by performance",
            subTitle: "We consider performance as the only parameter to deliver value.",
        },
        {
            title: "Accessible to Everyone",
            subTitle: "With minimum asset wise threshold , we are accessible to everyone.",
        },
        {
            title: "We cover everything",
            subTitle: "From high to low risk , we cover everything falls under whole  Investment gamut.",
        },
    ]

    return (
        <AppSectionWrapper>
            <div className="pt-28 pb-28 sm:pt-40 sm:pb-52 dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="w-11/12 mx-auto  px-4 sm:px-3 md:px-5 relative z-30">
                    <div className="mb-20 sm:mb-28 md:text-center">
                        <div className="xl:text-[3rem]/[4.2rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[3.6rem]/[3.8rem] font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-800 to-neutral-500">What makes <br />us truly different</div>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-1 gap-10 sm:gap-y-4 lg:grid-cols-2 xl:grid-cols-4">
                            {weServeData.map((item, index) => (
                                <CardWeServe key={index} title={item.title} subTitle={item.subTitle} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppSectionWrapper>
    );
}
