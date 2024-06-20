import { CardsProps } from './_interface/app-interface';
import CardBanner from './cards/banner';

export default function SectionPageBanner() {

    const CardCareerData: CardsProps[] = [
        {
            title: "Unlocking the power of money, Turning it to wealth",
            subTitle: "Clinch offers exclusively crafted investment solutions, enabling you to choose from the best.",
            linkText: "Make the first move",
            href: "/get-started",
        }
    ]

    return (
        <div className="pt-20 pb-20 min-h-[calc(100vh-20vh)] flex flex-col justify-center items-center">
            <div className="container max-w-6xl">
                {CardCareerData.map((item, index) => (
                    <CardBanner
                        key={index}
                        id={item.id}
                        title={item.title}
                        subTitle={item.subTitle}
                        linkText={item.linkText}
                        href={item.href}
                    />
                ))}
            </div>
        </div>
    );
}
