import GetStartedNavBar from '../../_components/get-started-navbar';
import { GetStartedLinks } from '../../_components/_interface/app-interface';
import LinkListGetStarted from '../../_components/get-started/list-get-started';
import Link from 'next/link';
import { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function GetStartedPage() {
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


  return (
    <div className="relative flex min-h-[calc(100vh-661px)] flex-col">
      <GetStartedNavBar />
      <div className="md:pt-14 md:pb-14 pt-6 pb-6 bg-blue-100/70">
        <div className="w-11/12 md:w-7/12 mx-auto px-6">
          <div className="xl:text-[2.4rem]/[2.8rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[2rem]/[2.1rem] font-bold md:font-semibold">How you would want your get started </div>
          <div className="sm:text-[1.15rem] text-[1rem] mt-5 md:mt-2">Choose from the products your are interested in</div>
        </div>
      </div>
      <div className="pt-16 pb-32">
        <div className="w-11/12 md:w-7/12 mx-auto px-6">
          <div className="flex flex-row items-center justify-between mb-3 md:mb-8 font-semibold">
            <div className="sm:text-[1.1rem] text-[1rem] text-slate-600 dark:text-white">Select Product</div>
            <Link href={'/signup'} className="text-blue-700 hover:text-red-700"> I'll do it later</Link>
          </div>
          {getStartedList.map((items, index) => {
            return (<LinkListGetStarted key={index} title={items.title} label={items.label} href={items.href} />)
          })}
        </div>
      </div>
    </div>
  );
}
