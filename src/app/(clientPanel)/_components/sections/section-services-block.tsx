import { ExclusiveProductsProps } from '@/app/interface/client-interface';
import CardExclusiveOffering from '../cards/exclusive-offerings';
import AppSectionWrapper from '../animation/app-wrapper';

export default function SectionServicesBlock({ searchParams }: { searchParams?: { query?: string; page?: string } }) {

    const cardData: ExclusiveProductsProps[] = [
        {
            title: "Wealth creation for Millennials",
            subTitle: "Exclusively designed to match millennial's aspirations, this Investment solution is designed to meet the risk and reward matrix of millennials",
            tags: [
                {
                    title: "Age 26 - 41",
                    subTitle: "",
                }
            ],
            linkText: "Get Started",
            href: {
                pathname: "/get-started/are-you-a-millennial",
                query: {
                    link: "https://calendly.com/ichwebdsign/portfolio-management-services"
                }
            },
            imgSrc: "/exclusive-offerings-01.jpg",
            shadow: "shadow-multi-orange"
        },
        {
            title: "Wealth creation for Gen X",
            subTitle: "With changing priorities and asset size, we provide holistic wealth management solutions to match your aspirations.",
            tags: [
                {
                    title: "Age 42 - 57",
                    subTitle: "",
                }
            ],
            linkText: "Get Started",
            href: {
                pathname: "/get-started/are-you-gen-x",
                query: {
                    link: "https://calendly.com/ichwebdsign/portfolio-management-services"
                }
            },
            imgSrc: "/exclusive-offerings-02.jpg",
            shadow: "shadow-multi-gray",
            reversed: true
        },
        {
            title: "Wealth Protector",
            subTitle: "If you have achieved your financial goals and now looking to protect your wealth with steady returns or to meet upcoming priorities",
            tags: null,
            linkText: "Get Started",
            href: {
                pathname: "/get-started/wealth-protector-and-growth-program",
                query: {
                    link: "https://calendly.com/ichwebdsign/portfolio-management-services"
                }
            },
            imgSrc: "/exclusive-offerings-03.jpg",
            shadow: "shadow-multi-orange"
        },
        {
            title: "Standalone Investment Solutions",
            subTitle: "We provide a variety of investment options to assist you in reaching your objectives. Select from our carefully crafted portfolios across different asset classes.",
            tags: [
                {
                    title: "PMS",
                    subTitle: ''
                },
                {
                    title: "Stocks",
                    subTitle: ''
                },
                {
                    title: "Mutual Funds",
                    subTitle: ''
                },
                {
                    title: "Fixed Income",
                    subTitle: ''
                }
            ],
            linkText: "Get Started",
            href: "/get-solutions",
            imgSrc: "/exclusive-offerings-04.jpg",
            shadow: "shadow-multi-gray",
            reversed: true
        }
    ]

    return (
        <AppSectionWrapper>
            <div className="bg-black/[.02] dark:bg-white/[.01] pt-40 pb-10">
                <div className="w-11/12 mx-auto  px-4 sm:px-3 md:px-5 mb-0 text-center">
                    <div className="md:text-[4rem]/[4rem] text-[3rem]/[3.2rem] font-bold border-b-2 border-t-2 border-gray-300 dark:border-gray-700 pb-10 pt-10">Our Exclusive Offerings</div>
                </div>
                <div className="w-11/12 mx-auto px-0 sm:px-3 md:px-5">
                    {cardData.map((items, index) => {
                        return (
                            <CardExclusiveOffering
                                key={index}
                                title={items.title}
                                subTitle={items.subTitle}
                                tags={items.tags}
                                keyword={items.keyword}
                                imgSrc={items.imgSrc}
                                shadow={items.shadow}
                                linkText={items.linkText}
                                href={items.href}
                                reversed={items.reversed}
                            />
                        );
                    })}
                </div>
            </div>
        </AppSectionWrapper>
    );
}
