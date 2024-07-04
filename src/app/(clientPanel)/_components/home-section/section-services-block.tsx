import { ExclusiveProductsProps } from '../_interface/app-interface';
import CardExclusiveOffering from '../cards/exclusive-offerings';

export default function SectionServicesBlock({ searchParams }: { searchParams?: { query?: string; page?: string } }) {

    const cardData: ExclusiveProductsProps[] = [
        {
            title: "Wealth creation for Millennials",
            subTitle: "Exclusively designed to match millennial's aspirations, this Investment solution is designed to meet the risk and reward matrix of millennials",
            type: "Age 26 - 41",
            linkText: "Get Started",
            href: "/get-started",
            imgSrc: "/exclusive-offerings-01.jpg",

        },
        {
            title: "Wealth creation for Gen X",
            subTitle: "With changing priorities and asset size, we provide holistic wealth management solutions to match your aspirations.",
            type: "Age 42 - 57",
            linkText: "Get Started",
            href: "/get-started",
            imgSrc: "/exclusive-offerings-02.jpg",
            reversed: true
        },
        {
            title: "Wealth Protector",
            subTitle: "If you have achieved your financial goals and now looking to protect your wealth with steady returns or to meet upcoming priorities",
            type: "",
            linkText: "Get Started",
            href: "/get-started",
            imgSrc: "/exclusive-offerings-01.jpg",
        }
    ]

    return (
        <div className="bg-black/[.02] dark:bg-white/[.01] pt-40 pb-10">
            <div className="w-11/12 mx-auto  px-4 sm:px-3 md:px-5 mb-10">
                <div className="md:text-[4rem]/[4rem] text-[3rem]/[3.2rem] font-bold border-b-2 border-gray-300 dark:border-gray-700 pb-10">Our Exclusive Offerings</div>
            </div>
            <div className="w-11/12 mx-auto  px-4 sm:px-3 md:px-5">
                {cardData.map((items, index) => {
                    return (
                        <CardExclusiveOffering
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
