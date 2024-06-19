

import { WealthManagerProps } from './_interface/app-interface';
import CardWealthManager from './cards/card-wealth-manager';


export default function SectionWealthManager() {

    const CardCareerData: WealthManagerProps[] = [
        {
            title: "A Private wealth manager to you. Anywhere, Anytime",
            subTitle: "Our Qualified wealth managers are trained to guide you on your journey of Investment.",
            linkText: "Get Started",
            imgSrc: "/section-2-img.jpg",
            href: "/get-started",
        }
    ]

    return (
        <div className="pt-20 pb-20 min-h-[calc(100vh-20vh)] flex flex-col justify-center items-center">
            <div className="container max-w-screen-2xl">
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
    );
}
