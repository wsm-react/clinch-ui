import Link from 'next/link';
import CardCareer from './cards/career';
import CardHeadings from './cards/headings';
import { CardCareerProps } from './_interface/app-interface';

export default function SectionCareer() {

    const CardCareerData: CardCareerProps[] = [
        {
            id: 1,
            title: "Privacy & cookie notice",
            subTitle: "/text",
        }
    ]

    return (
        <div className="bg-white/[.04] pt-20 pb-20">
            <div className="container max-w-screen-xl">
                <CardHeadings title={'Section Career'} subTitle={'Section Career subTitle'} />
                {CardCareerData.map((item, index) => (
                    <CardCareer key={index} id={item.id} title={item.title} subTitle={item.subTitle} />
                ))}
            </div>
        </div>
    );
}
