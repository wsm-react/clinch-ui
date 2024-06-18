import Link from 'next/link';
import CardOurServices from './cards/services';
import { OurServicesProps } from './_interface/app-interface';

export default function SectionServices() {

    const CardCareerData: OurServicesProps[] = [
        {
            title: "Portfolio Management",
            subTitle: "Keeping your books up to date monthly gives you reliable numbers key to sound financial decisions.",
            linkText: "Get Started",
            href: "/get-started",
            tags: [
                {
                    title: "Benchmark return",
                    subTitle: "42%",
                },
                {
                    title: "Holding period",
                    subTitle: "3+ Yrs.",
                },
                {
                    title: "Min Investment",
                    subTitle: "50,00,000",
                }
            ]
        }
    ]

    return (
        <div className="bg-white/[.04] pt-20 pb-20">
            <div className="container max-w-screen-xl mb-10 text-center">
                <div className="xl:text-[3rem]/[5.6rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-semibold">Investment products, to aid your wealth</div>
                <div className="sm:text-[1.3rem] text-[1rem] text-gray-200">Choose from our curated products baskets catering to all risk types.</div>
            </div>
            <div className="container max-w-screen-xl">
                {CardCareerData.map((item, index) => (
                    <CardOurServices
                        key={index}
                        title={item.title}
                        subTitle={item.subTitle}
                        linkText={item.linkText}
                        href={item.href}
                        tags={item.tags}
                    />
                ))}
            </div>
        </div>
    );
}
