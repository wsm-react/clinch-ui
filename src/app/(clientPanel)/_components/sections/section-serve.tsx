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
            subTitle: "We are driven by the value we create for you, the performance we deliver",
        },
        {
            title: "Accessible to all",
            subTitle: "We are offering access to private wealth for everyone.",
        },
        {
            title: "Comprehensive Wealth planning",
            subTitle: "Assessment guided by experts to ensure we meet all requirements.",
        },
    ]

    return (
        <AppSectionWrapper>
            <div className="pt-28 pb-28 sm:pt-40 sm:pb-52">
                <div className="w-11/12 mx-auto  px-4 sm:px-3 md:px-5">
                    <div className="mb-20 sm:mb-28 md:text-center">
                        <div className="xl:text-[3rem]/[4.2rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[3.6rem]/[3.8rem] font-bold">What makes <br />us truly different</div>
                    </div>
                    <div className="">
                        <div className="grid grid-cols-1 gap-10 sm:gap-y-8 lg:grid-cols-2 xl:grid-cols-4">
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
