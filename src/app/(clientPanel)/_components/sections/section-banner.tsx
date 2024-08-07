import { CardsProps } from '@/app/interface/client-interface';
import CardBanner from '../cards/banner';
import AppSectionWrapper from '../animation/app-wrapper';
import { FlipWords } from '@/components/ui/flip-words';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function SectionPageBanner() {

    const bannerData: CardsProps[] = [
        {
            title: "Turn your money into wealth",
            // subTitle: "Clinch offers exclusively crafted investment solutions, enabling you to choose from the best.",
            // keyword: "Clinch",
            // animateKeyword: ["offers exclusively", "investment"],
            subTitle: "Clinch offers exclusively crafted investment solutions, enabling you to choose from the best.",
            keyword: "Clinch",
            // replaceText: "investment",
            // animateKeywords: ["investment", "ipo", "another text"],
            linkText: "Make the first move",
            href: "/get-started",
        }
    ]

    return (
        <AppSectionWrapper>
            <AuroraBackground>
                <div className="pt-20 pb-20 min-h-[calc(100vh-40vh)] sm:min-h-[calc(100vh-16vh)] flex flex-col justify-center items-center dark:bg-gray-400-radial relative z-40">
                    <div className="container max-w-6xl">
                        {bannerData.map((item, index) => (
                            <CardBanner
                                key={`banner-${index}`}
                                id={item.id}
                                title={item.title}
                                subTitle={item.subTitle}
                                keyword={item.keyword}
                                replaceText={item.replaceText}
                                animateKeywords={item.animateKeywords}
                                linkText={item.linkText}
                                href={item.href}
                            />
                        ))}
                    </div>
                </div>
            </AuroraBackground>
        </AppSectionWrapper>
    );
}
