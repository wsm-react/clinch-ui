import Link from 'next/link';
import CardOurServices from '../cards/services';
import { OurServicesProps } from '../_interface/app-interface';

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
        },
        {
            title: "Mutual Funds",
            subTitle: "Bringing down to 40 great investment plans from 4000 schemes. From low, medium to high alpha generator we have in our basket.",
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
        },
        {
            title: "Bonds and FD's",
            subTitle: "If you are looking for low risk, consistent returns, Of Course better in deposits and bank FD's , This is you game and we know the trick to win.",
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
        },
        {
            title: "IPO's",
            subTitle: "Many thinks it's a easy bet to make big money but their is a caveat and for sure not all are same.",
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
        <div className="bg-black/[.02] dark:bg-white/[.01] pt-32 pb-44">
            <div className="container max-w-screen-2xl mb-28 text-center">
                <div className="xl:text-[3rem]/[5.6rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-semibold">Investment products, to aid your wealth</div>
                <div className="sm:text-[1.3rem] text-[1rem]">Choose from our curated products baskets catering to all risk types.</div>
            </div>
            <div className="size-10/12 mr-auto ml-auto">
                <div className="gap-x-14 gap-y-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
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
        </div>
    );
}
