

import { WealthManagerProps } from '@/app/interface/client-interface';
import CardWealthManager from '../cards/card-wealth-manager';
import AppPageWrapper from '../animation/app-wrapper';
import AppSectionWrapper from '../animation/app-wrapper';


export default function SectionWealthManager() {

    const CardCareerData: WealthManagerProps[] = [
        {
            title: "A Private wealth manager to you.",
            subTitle: "Our Qualified wealth managers are trained to guide you on your journey of Investment.",
            linkText: "Get Started",
            // imgSrc: "/section-2-img.jpg",
            imgSrc: "/private-wealth-2.png",
            href: "/get-started",
        }
    ]

    return (
        <AppSectionWrapper>
            <div className="pt-28 pb-36 flex flex-col justify-center items-center">
                <div className="w-11/12 mx-auto px-4 sm:px-3 md:px-5">
                    {CardCareerData.map((item, index) => (
                        <CardWealthManager
                            key={index}
                            id={item.id}
                            title={item.title}
                            subTitle={item.subTitle}
                            imgSrc={item.imgSrc}
                            linkText={item.linkText}
                            href={item.href}
                        />
                    ))}
                </div>
            </div>
        </AppSectionWrapper>
    );
}
