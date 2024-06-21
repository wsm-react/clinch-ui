import Link from 'next/link';
import { OurServicesProps, WeServeProps } from '../_interface/app-interface';
import CardWeServe from '../cards/we-serve';


export default function SectionServe() {

    const weServeData: WeServeProps[] = [
        {
            title: "No hidden catches",
            subTitle: "Benefits that work the way you thought they would.",
        },
        {
            title: "No complicated jargon",
            subTitle: "We make it simple to understand your coverage.",
        },
        {
            title: "No unexpected costs",
            subTitle: "When it comes to health coverage, it's good to be predictable.",
            reversed: true,
        },
    ]

    return (
        <div className="pt-40 pb-52">
            <div className="container max-w-screen-2xl xl:max-w-screen-xl">
                <div className="container max-w-screen-2xl xl:max-w-screen-xl mb-28 text-center">
                    <div className="xl:text-[3rem]/[4.2rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-bold">What makes <br />us truly different</div>
                </div>
                <div className="container max-w-screen-2xl xl:max-w-screen-xl">
                    <div className="flex flex-wrap gap-x-8 gap-y-16 sm:gap-y-8 justify-between items-center">
                        {weServeData.map((item, index) => (
                            <CardWeServe key={index} title={item.title} subTitle={item.subTitle} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
