import { CardsProps } from '@/app/interface/client-interface';
import CardBanner from '../cards/banner';
import AppSectionWrapper from '../animation/app-wrapper';

export default function SectionPageBanner() {

    const CardCareerData: CardsProps[] = [
        {
            title: "Turn your money into wealth",
            subTitle: "Clinch offers exclusively crafted investment solutions, enabling you to choose from the best.",
            keyword: "Clinch",
            linkText: "Make the first move",
            href: "/get-started",
        }
    ]

    return (
        <AppSectionWrapper>
            <div className="pt-20 pb-20 min-h-[calc(100vh-40vh)] sm:min-h-[calc(100vh-16vh)] flex flex-col justify-center items-center dark:bg-gray-radial">
                <div className="container max-w-6xl">
                    {CardCareerData.map((item, index) => (
                        <CardBanner
                            key={index}
                            id={item.id}
                            title={item.title}
                            subTitle={item.subTitle}
                            keyword={item.keyword}
                            linkText={item.linkText}
                            href={item.href}
                        />
                    ))}
                </div>
            </div>
        </AppSectionWrapper>
    );
}
