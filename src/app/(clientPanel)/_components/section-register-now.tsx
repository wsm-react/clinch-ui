import Link from 'next/link';
import CardExclusiveProducts from './cards/exclusive-products';
import { CardCareerProps } from './_interface/app-interface';

export default function SectionRegisterNow() {

    const CardCareerData: CardCareerProps[] = [
        {
            id: 1,
            title: "Privacy & cookie notice",
            subTitle: "/text",
        }
    ]
    return (
        <div className="bg-background/20 backdrop-blur pt-20 pb-20">
            <div className="container max-w-screen-xl">
                SectionRegisterNow
            </div>
        </div>
    );
}
