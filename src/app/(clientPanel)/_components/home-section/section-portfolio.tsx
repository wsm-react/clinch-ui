import { SubscribeProps } from '../_interface/app-interface';
import CradPortfolio from '../cards/exclusive-portfolio';

export default function SectionPortfolio() {

    const subscribeData: SubscribeProps = {
        id: 1,
        title: "email",
        subTitle: "Subscribe",
        note: "By subscribing you agree to receive communications from Clinch. You can unsubscribe anytime using the link in the footer of any of our emails. See our privacy policy."
    }

    return (
        <div className="bg-blue-800 pt-28 pb-28 sm:pt-40 sm:pb-40">
            <div className="max-w-fit sm:max-w-2xl xl:max-w-5xl 2xl:max-w-5xl mx-auto md:text-center container">
                <div className="xl:text-[3.4rem]/[4rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[2.6rem]/[3rem] font-bold">Already have an Investment portfolio, Get it reviewed for free</div>
            </div>
            <CradPortfolio title={subscribeData.title} subTitle={subscribeData.subTitle} />
            <div className="max-w-fit sm:max-w-2xl mx-auto md:text-center container">
                <div className="lg:text-[1rem] text-[.8rem]">{subscribeData.note}</div>
            </div>
        </div>
    );
}
