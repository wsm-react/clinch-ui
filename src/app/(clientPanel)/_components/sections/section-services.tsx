import Link from 'next/link';
import CardOurServices from '../cards/services';
import { OurServicesProps } from '@/app/interface/client-interface';

export default function SectionServices({ searchParams }: { searchParams?: { query?: string; page?: string } }) {

    const CardCareerData: OurServicesProps[] = [
        {
            title: "Portfolio Management",
            subTitle: "Keeping your books up to date monthly gives you reliable numbers key to sound financial decisions.",
            linkText: "Get Started",
            bgLight: "border border-lime-500/30 dark:border-lime-900/50",
            bgDark: "bg-gradient-to-r from-lime-500/20 to-blue-500/02",
            tags: [
                {
                    title: "Benchmark return",
                    subTitle: "42%",
                    href: ''
                },
                {
                    title: "Holding period",
                    subTitle: "3+ Yrs.",
                    href: ''
                },
                {
                    title: "Min Investment",
                    subTitle: "50,00,000",
                    href: ''
                }
            ],
            href: {
                pathname: "/get-started/portfolio-management-services",
                query: {
                    link: "https://calendly.com/ichwebdsign/portfolio-management-services"
                }
            },
        },
        {
            title: "Mutual Funds",
            subTitle: "Bringing down to 40 great investment plans from 4000 schemes. From low, medium to high alpha generator we have in our basket.",
            linkText: "Get Started",
            bgLight: "border border-amber-500/30 dark:border-amber-900/50",
            bgDark: "bg-gradient-to-r from-amber-500/20 to-blue-500/02",
            tags: [
                {
                    title: "Benchmark return",
                    subTitle: "42%",
                    href: ''
                },
                {
                    title: "Holding period",
                    subTitle: "3+ Yrs.",
                    href: ''
                },
                {
                    title: "Min Investment",
                    subTitle: "50,00,000",
                    href: ''
                }
            ],
            href: {
                pathname: "/get-started/mutual-funds",
                query: {
                    link: "https://calendly.com/ichwebdsign/mutual-funds"
                }
            },
        },
        {
            title: "Bonds and FD's",
            subTitle: "If you are looking for low risk, consistent returns, Of Course better in deposits and bank FD's , This is you game and we know the trick to win.",
            linkText: "Get Started",
            bgLight: "border border-cyan-500/30 dark:border-cyan-900/50",
            bgDark: "bg-gradient-to-r from-cyan-500/20 to-blue-500/02",
            tags: [
                {
                    title: "Benchmark return",
                    subTitle: "42%",
                    href: ''
                },
                {
                    title: "Holding period",
                    subTitle: "3+ Yrs.",
                    href: ''
                },
                {
                    title: "Min Investment",
                    subTitle: "50,00,000",
                    href: ''
                }
            ],
            href: {
                pathname: "/get-started/bonds-and-fds",
                query: {
                    link: "https://calendly.com/ichwebdsign/bonds-and-fds"
                }
            },
        },
        {
            title: "IPO's",
            subTitle: "Many thinks it's a easy bet to make big money but their is a caveat and for sure not all are same.",
            linkText: "Get Started",
            bgLight: "border border-fuchsia-500/30 dark:border-fuchsia-900/50",
            bgDark: "bg-gradient-to-r from-fuchsia-500/20 to-blue-500/02",
            tags: [
                {
                    title: "Benchmark return",
                    subTitle: "42%",
                    href: ''
                },
                {
                    title: "Holding period",
                    subTitle: "3+ Yrs.",
                    href: ''
                },
                {
                    title: "Min Investment",
                    subTitle: "50,00,000",
                    href: ''
                }
            ],
            href: {
                pathname: "/get-started/stocks",
                query: {
                    link: "https://calendly.com/ichwebdsign/ipos"
                }
            },
        }
    ]

    return (
        <div className="bg-black/[.03] dark:bg-white/05 pt-32 sm:pb-44 pb-20">
            <div className="max-w-fit sm:max-w-screen-2xl container mb-28 sm:text-center">
                <div className="xl:text-[3rem]/[5.6rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[3.6rem]/[3.8rem] font-bold sm:font-semibold">Investment products to aid your wealth</div>
                <div className="sm:text-[1.3rem] text-[1.4rem] mt-8 sm:mt-0">Choose from our curated products baskets catering to all risk types.</div>
            </div>
            <div className="w-auto sm:w-11/12 mx-auto px-4 sm:px-3 md:px-5">
                <div className="gap-x-0 gap-y-10 sm:gap-x-14 sm:gap-y-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    {CardCareerData.map((item, index) => (
                        <CardOurServices
                            key={index}
                            title={item.title}
                            subTitle={item.subTitle}
                            linkText={item.linkText}
                            href={item.href}
                            tags={item.tags}
                            bgLight={item.bgLight}
                            bgDark={item.bgDark}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
