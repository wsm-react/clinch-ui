import { ChevronRight } from 'lucide-react';
import { HelpYouProps } from '../_interface/app-interface';
import CardHelpYou from '../cards/help-you';

export default function SectionHelpYou() {

    const helpYouData: HelpYouProps[] = [
        {
            title: 'Ducimus Dolore Esse Voluptates',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam consequatur dolore omnis nulla veritatis ab. Quaerat ipsam possimus eveniet obcaecati, magnam accusamus aut omnis incidunt. Minus asperiores similique ab labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus dolore officiis architecto adipisci laboriosam voluptatum voluptatibus? Sequi distinctio, molestiae praesentium aliquid, incidunt debitis alias mollitia, ducimus dolore esse voluptates?`
        },
        {
            title: "Veniam consequatur dolore omnis nulla",
            content: "I've been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It's not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you'll realize semantic CSS was a 20 year mistake."
        },
        {
            title: "If I had to recommend a way of getting into programming today",
            content: 'If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.'
        }
    ]

    const description = `People describe Nova's service as "exceeding expectations", "attentive and empathetic", "proactive & seamless", and the list is never-ending!`;


    return (
        <div className="bg-black/[.05] dark:bg-white/[.02] pt-40 pb-40">
            <div className="w-11/12 mx-auto  px-4 sm:px-3 md:px-5 mb-10 md:text-center">
                <div className="xl:text-[3.2rem]/[5rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[3.6rem]/[3.8rem] font-semibold">How can we help you?</div>
                <div className="sm:text-[1.8rem] text-[1.6rem] mt-6">Popular Topics</div>
            </div>
            <div className="container max-w-screen-xl">
                <CardHelpYou
                    data={helpYouData}
                    label={"Explore more FAQ's"}
                    href={'/faqs'}
                    className={'sm:text-[1.5rem] text-[1rem] focus-visible:ring-[none] flex flex-row items-center hover:text-blue-400 dark:hover:text-cyan-300'}
                    iconClass={'inline-block w-14 h-10 ml-2 mt-1'}
                />
            </div>
        </div>
    );
}
