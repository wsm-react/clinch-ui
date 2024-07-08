import { ChevronRight } from 'lucide-react';
import { HelpYouProps } from '@/app/interface/client-interface';
import CardHelpYou from '../cards/help-you';
import AppPageWrapper from '../animation/app-wrapper';
import AppSectionWrapper from '../animation/app-wrapper';

export default function SectionHelpYou() {

    const helpYouData: HelpYouProps[] = [
        {
            title: 'What is Private wealth management at Clinch?',
            content: `In the realm of private wealth management, every facet of wealth, from its inception to preservation and safeguarding, is taken into consideration. Wealth managers at PWM focus on every stage of an individual's wealth-building journey. 
At Clinch, our team comprises Investment Advisors who evaluate clients' current financial standing and future goals, a Product and Strategy team dedicated to selecting the optimal product combination, and Risk Managers who monitor goal progress and market risks impacting clients' wealth. We provide personalized services to each client with great attention to detail and caution. PWM stands out from traditional brokerages and distribution firms by tailoring the product mix to meet each client's specific needs.`
        },
        {
            title: 'Why would someone need Private wealth management?',
            content: `An essential element of private wealth management involves having access to a team of experts specializing in investment, risk, and tax fields. Private wealth management is crucial for high-net-worth individuals who require ongoing monitoring and professional guidance to seize market opportunities. These PWM specialists focus not only on wealth growth but also on optimizing cash flows and safeguarding wealth for the long term.`
        },
        {
            title: 'What is the minimum investment for wealth management services?',
            content: `Wealth Management services are offered to customers maintaining an Investment Value of minimum Rs 25 lakh. Clinch Mutual funds advisory services are offered to customers maintaining a mutual funds investment value of Rs 5 Lakh. `
        },
        {
            title: 'How experienced is Clinch Private Wealth Management Team?',
            content: `When you're looking for a financial advisor, choose someone proven you can trust. Clinch Private Wealth is helping clients to invest, preserve and protect their assets. Our team averages more than 15 years of wealth management experience.`
        },
        {
            title: 'When should I consider private wealth management?',
            content: `Private wealth management might be the suitable option for you if you meet the threshold and feel that your financial situation has become too complex to manage independently or with only one financial advisor or planner.`
        }
    ]



    return (
        <AppSectionWrapper>
            <div className="bg-black/[.05] dark:bg-white/[.02] pt-40 pb-40">
                <div className="w-11/12 mx-auto  px-4 sm:px-3 md:px-5 mb-10 md:text-center">
                    <div className="xl:text-[3.2rem]/[5rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[3.4rem]/[3.8rem] font-bold">How can we help you?</div>
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
        </AppSectionWrapper>
    );
}
