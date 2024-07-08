import AppPageWrapper from '../../_components/animation/page-wrapper';
import { HelpYouProps } from '@/app/interface/client-interface';
import FaqsAccordion from '../../_components/cards/faqs-accordion';

export default function faqsPage() {

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
    <AppPageWrapper>
      <div className="pt-20 pb-20 min-h-[calc(100vh-40vh)] sm:min-h-[calc(100vh-16vh)] flex flex-col justify-center items-center dark:bg-gray-radial">
        <div className="w-11/12 mx-auto px-4 sm:px-3 md:px-5">
          <div className="md:flex-row flex flex-col justify-between items-top">
            <div className="w-full md:basis-[38%]">
              <div className="asas">
                <div className="xl:text-[3.2rem]/[3.6rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[3.4rem]/[3.8rem] font-bold">How can we help you?</div>
                <div className="sm:text-[1.8rem] text-[1.6rem] mt-6">Popular Topics</div>
              </div>
            </div>
            <div className="w-full md:basis-[60%] md:mt-0 mt-10">
              <FaqsAccordion data={helpYouData} />
            </div>
          </div>
        </div>
      </div>
    </AppPageWrapper>
  );
}
