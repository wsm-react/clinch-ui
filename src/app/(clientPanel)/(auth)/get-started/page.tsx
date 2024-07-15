
import Link from 'next/link';
import { Metadata, Viewport } from 'next';

import GetStartedNavBar from '@/app/(clientPanel)/_components/get-started-navbar';
import LinkListGetStarted from '@/app/(clientPanel)/_components/get-started/list-get-started';
import { GetStartedLinks } from '@/app/interface/client-interface';

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: "Get Started",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  description: "Clinch Get Started",
  alternates: {
    canonical: '/get-started'
  },
  keywords: ['get-started', 'React get-started'],
}

export default function GetStartedPage({ searchParams }: { searchParams?: { query?: string; page?: string } }) {
  const getStartedList: GetStartedLinks[] = [
    {
      id: 1,
      title: "Are you a millennial?",
      label: "Aged between( 26- 41),Wealth Creation Millennials is exclusively designed to match millennial's aspirations, Investment solution designed to meet the risk and reward matrix of millennials.",
      href: {
        pathname: "/get-started/are-you-a-millennial",
        query: {
          link: "https://calendly.com/ichwebdsign/portfolio-management-services"
        }
      },
    },
    {
      id: 2,
      title: "Are you Gen X?",
      label: "Aged between ( 42-57 ) Wealth creation for Gen X, With changing priorities and asset size, we provide holistic wealth management solutions to match your aspirations.",
      href: {
        pathname: "/get-started/are-you-gen-x",
        query: {
          link: "https://calendly.com/ichwebdsign/stocks"
        }
      },
    },
    {
      id: 1,
      title: "Standalone Investment solutions",
      label: "Irrespective of your Age, Access to curated standalone investment solutions for all kind of Investment.",
      href: {
        pathname: "/get-started/standalone-investment-solutions",
        query: {
          link: "https://calendly.com/ichwebdsign/mutual-funds"
        }
      },
    },
    {
      id: 1,
      title: "Wealth Protector and growth Program",
      label: "If you have achieved your financial goals and now looking to protect your wealth with steady returns or to meet upcoming priorities",
      href: {
        pathname: "/get-started/wealth-protector-and-growth-program",
        query: {
          link: "https://calendly.com/ichwebdsign/bonds-and-fds"
        }
      },
    }
  ]


  return (
    <div className="relative flex min-h-[calc(100vh-661px)] flex-col">
      <GetStartedNavBar />
      <div className="md:pt-14 md:pb-14 pt-6 pb-6">
        <div className="w-11/12 md:w-7/12 mx-auto px-6">
          <div className="xl:text-[2.3rem]/[2.8rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[2rem]/[2.1rem] font-normal md:font-semibold">How you would want your get started</div>
          <div className="sm:text-[1.15rem] text-[.95rem] mt-5 md:mt-2">Choose from the products your are interested in</div>
        </div>
      </div>
      <div className="pt-10 pb-32">
        <div className="w-11/12 md:w-7/12 mx-auto px-6">
          <div className="flex flex-row items-center justify-between mb-3 md:mb-8 font-semibold">
            <div className="sm:text-[1.4rem] text-[1.2rem] text-slate-600 dark:text-white">Select Product</div>
            <Link href={'/sign-up'} className="text-blue-700 hover:text-red-700"> I'll do it later</Link>
          </div>
          {getStartedList.map((items, index) => {
            return (<LinkListGetStarted key={index} title={items.title} label={items.label} href={items.href} />)
          })}
        </div>
      </div>
    </div>
  );
}
