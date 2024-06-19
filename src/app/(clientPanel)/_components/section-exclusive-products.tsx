import Link from 'next/link';
import CardExclusiveProducts from './cards/exclusive-products';
import { ExclusiveProductsProps } from './_interface/app-interface';

export default function SectionExclusiveProducts() {

    const exclusiveProductsData: ExclusiveProductsProps[] = [
        {
            title: "Investing without knowing your risk appetite and attitude ",
            subTitle: "Try Riskometer Tool to assess where you stand Start your assessment now - CTA",
            keyword: "Riskometer",
            linkText: "Get Started",
            href: "/get-started",
            imgSrc: "/section-1-img.svg",
            reversed: true
        },
        {
            title: "Earn extra yield on your current savings and deposits ",
            subTitle: "Our debt analyst tract more then 100 fixed income products that keep the risk and intact and provide better yield on your saving",
            linkText: "Get Started",
            href: "/get-started",
            imgSrc: "/section-2-img.svg",

        },
        {
            title: "Custom mutual funds portfolio's , Curated exclusively for you",
            subTitle: "Each with its own unique investment strategy, Smart Portfolios are a convenient and diversified way to access major market trends shaping our world today.",
            linkText: "Get Started",
            href: "/get-started",
            imgSrc: "/section-3-img.svg",
            reversed: true
        },
        {
            title: "When it's about wealth Goals You Set - We track - We Deliver",
            subTitle: "You will be able to set your future goals and help us determine your current investment plan to keep you on track.",
            linkText: "Get Started",
            href: "/get-started",
            imgSrc: "/section-4-img.svg",

        }
    ]

    return (
        <div className="bg-white/[.04] pt-20 pb-20">
            <div className="container max-w-screen-2xl mb-10">
                <div className="xl:text-[3rem]/[5.6rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-semibold">Exclusive products and tools to make more on your money</div>
            </div>
            <div className="container max-w-screen-2xl">
                {exclusiveProductsData.map((items, index) => {
                    return (
                        <CardExclusiveProducts
                            key={index}
                            title={items.title}
                            subTitle={items.subTitle}
                            keyword={items.keyword}
                            imgSrc={items.imgSrc}
                            linkText={items.linkText}
                            href={items.href}
                            reversed={items.reversed}
                        />
                    );
                })}

            </div>
        </div>
    );
}
