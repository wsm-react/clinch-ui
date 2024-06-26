import Link from 'next/link';
import CardTestimonial from '../cards/testimonial';
import { TestimonialProps } from '../_interface/app-interface';
import { EscapeSpecialChars, PadWithZero } from '@/utility/function';

export default function FormGetStarted() {



    const description = `People describe Nova's service as "exceeding expectations", "attentive and empathetic", "proactive & seamless", and the list is never-ending!`;


    return (
        <div className="pt-20 ">
            <div className="w-7/12 mx-auto px-4 sm:px-3 md:px-5">
                <div className="sm:text-[1.8rem] text-[1.2rem]">Reviews that matters to us</div>
                <div className="xl:text-[3.2rem]/[3.4rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[2.1rem]/[2.6rem] font-bold">4.5 Rating for 100+ testimonials form our clients</div>
            </div>
        </div>
    );
}
