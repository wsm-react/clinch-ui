import Link from 'next/link';
import CardTestimonial from './cards/testimonial';
import { TestimonialProps } from './_interface/app-interface';
import { PadWithZero } from '@/utility/function';

export default function SectionTestimonial() {

    const weServeData: TestimonialProps[] = [
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling."
        },
        {
            name: "Manish Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: "Vaun Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: 'If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.'
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling."
        },
        {
            name: "Manish Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: "Vaun Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: 'If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.'
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling."
        },
        {
            name: "Manish Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: "Vaun Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: 'If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.'
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling."
        },
        {
            name: "Manish Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: "Vaun Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: 'If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.'
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling."
        },
        {
            name: "Manish Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: "Vaun Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: 'If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.'
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling."
        },
        {
            name: "Manish Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: "Vaun Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: 'If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.'
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling."
        },
        {
            name: "Manish Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: "Vaun Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: 'If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.'
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling."
        },
        {
            name: "Manish Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            name: "Vaun Kumar Gupta",
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: 'If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.'
        },
        {
            name: 'Arun Kumar Gupta',
            position: 'Frontend Developer with React',
            industry: 'It',
            imgSrc: '',
            message: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
    ]

    return (
        <div className="bg-black/[.05] dark:bg-white/[.04] pt-20">
            <div className="container max-w-screen-2xl mb-10 text-center">
                <div className="sm:text-[1.8rem] text-[1rem]">Reviews that matters to us</div>
                <div className="xl:text-[3.2rem]/[5.6rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[1.8rem]/[2.6rem] font-semibold">4.5 Rating for 100+ testimonials form our clients</div>
                <div className="sm:text-[1.15rem] text-[1rem] container max-w-screen-lg mt-6">People describe Nova’s service as "exceeding expectations", "attentive and empathetic", "proactive & seamless", and the list is never-ending!</div>
            </div>
            <CardTestimonial data={weServeData} />
        </div>
    );
}
