import Link from 'next/link';
import CardTestimonial from '../cards/testimonial';
import { GetStartedLinks, MenuLinks, TestimonialProps } from '../_interface/app-interface';
import { EscapeSpecialChars, PadWithZero } from '@/utility/function';
import FormGetStarted from './form-get-started';
import LinkListGetStarted from './list-get-started';

export default function SectionGetStarted() {

    const getStartedList: GetStartedLinks[] = [
        {
            id: 1,
            title: "Portfolio management services",
            label: "Managed portfolios with 32%* Returns (Variable) ",
            href: "/signup",
        },
        {
            id: 2,
            title: "Stocks",
            label: "Invest with experts built stocks portfolios",
            href: "/signup",
        },
        {
            id: 1,
            title: "Mutual Funds",
            label: "Guided fund with 26%* Returns (Variable)",
            href: "/signup",
        },
        {
            id: 1,
            title: "Bonds & FD's",
            label: "Grow your saving with 12%* Returns (Variable) ",
            href: "/signup",
        }
    ]

    const description = `People describe Nova's service as "exceeding expectations", "attentive and empathetic", "proactive & seamless", and the list is never-ending!`;


    return (
        <div className="pt-10 md:pt-20 pb-40">
            <div className="w-11/12 md:w-7/12 mx-auto px-6">
                <div className="xl:text-[2.4rem]/[2.8rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[2.4rem]/[2.7rem] font-bold md:font-semibold">How you would want your get started </div>
                <div className="sm:text-[1.25rem] text-[1.2rem] mt-6 md:mt-2">Choose from the products your are interested in
                </div>
            </div>
            <div className="w-11/12 md:w-7/12 mx-auto px-6 mt-24">
                {getStartedList.map((items, index) => {
                    return (<LinkListGetStarted key={index} title={items.title} label={items.label} href={items.href} />)
                })}
            </div>
        </div>
    );
}
