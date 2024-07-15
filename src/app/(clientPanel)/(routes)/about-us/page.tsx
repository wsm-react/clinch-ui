import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import AppPageWrapper from '../../_components/animation/page-wrapper';
import CardHeadings from '../../_components/cards/headings';
import { TextGenerateEffect } from '../../_components/cards/text-generate-effect';

import Image from 'next/image';
import GradientGrid from '../../_components/cards/gradient-grid';
import { ThemeModeToggle } from '../../_components/theme-toggle';
import { BorderPlusIcon } from '@/components/ui/border-icons';


export default function AboutUsPage() {

  const grid = [
    {
      title: "Building Wealth for you",
      description: "Making your money worth more. In the world of complexity, accessibility and too much information, It become so difficult to choose right investment. Stronger Wealth focus simplify investment opportunities that matches investor requirements."
    },
    {
      title: "We bring the best to the table",
      description: "When it comes to your money , we choose the best asset mix to invest, our asset class experts create curated baskets of products focused on performance, Yield and credibility."
    },
    {
      title: "Persistence is the only parameter",
      description: "while you have many parameters to judge our performance for us it's just being persistent and purposeful to every client wealth creation Goal."
    },
  ];

  const grid2 = [
    {
      title: "Unbiased",
      description: "We are Unbiased"
    },
    {
      title: "Believer",
      description: "We believe in what we do"
    },
    {
      title: "Performance",
      description: "We are driven by performance"
    },
    {
      title: "Purposeful",
      description: "For us, It's all about you"
    },
  ];


  return (
    <AppPageWrapper>

      <div className="relative">
        <div className="max-sm:pt-[calc(100.5*var(--scale))] max-sm:mb-0 max-sm:p-[calc(20*var(--scale))calc(28*var(--scale))] max-md:pt-[calc(92.5*var(--scale))] max-md:mb-[calc(100*var(--scale))] max-md:px-[calc(28*var(--scale))] max-md:pb-[calc(19*var(--scale))] max-lg:px-[calc(80*var(--scale))] max-lg:pb-[calc(48*var(--scale))] max-lg:pt-[calc(122*var(--scale))] pt-[calc(20*var(--scale))] px-[calc(126*var(--scale))] pb-[calc(48*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
          <div className="max-sm:w-full max-sm:flex max-sm:flex-col-reverse max-sm:h-auto max-md:h-[calc(330*var(--scale))] max-md:w-full max-sm:before:h-0 max-md:before:bottom-[calc(-160*var(--scale))] max-md:before:right-[calc(57*var(--scale))] max-md:before:w-[calc(652*var(--scale))] max-lg:before:bottom-[calc(-43*var(--scale))] max-lg:before:w-[calc(540*var(--scale))] max-lg:before:right-[calc(80*var(--scale))] max-lg:h-[calc(441*var(--scale))] h-[calc(689*var(--scale))] w-[109.32%] relative before:content-[''] before:absolute before:w-[calc(843*var(--scale))] before:h-[calc(2*var(--scale))] before:bg-black before:bottom-[calc(-67*var(--scale))] before:right-[calc(128*var(--scale))]">
            <div className="max-sm:hidden max-md:w-[calc(553*var(--scale))] max-md:h-[calc(312*var(--scale))] max-md:left-[calc(-62*var(--scale))] max-md:bottom-[calc(-19*var(--scale))] max-lg:w-[calc(738*var(--scale))] max-lg:h-[calc(416*var(--scale))] max-lg:left-[calc(-79*var(--scale))] max-lg:bottom-[calc(-25*var(--scale))] absolute bottom-[calc(-39*var(--scale))] left-[calc(-125*var(--scale))] w-[calc(1152*var(--scale))] h-[calc(650*var(--scale))] bg-[#c1b7b199]"></div>
            <div className="max-sm:w-full max-sm:max-w-full max-sm:static max-md:min-h-[calc(215*var(--scale))] max-md:gap-[calc(6*var(--scale))] max-sm:mt-[calc(-30*var(--scale))] max-sm:p-[calc(21*var(--scale))calc(26*var(--scale))] max-md:p-[calc(21*var(--scale))calc(40*var(--scale))] max-md:bottom-[calc(-141*var(--scale))] max-md:left-[calc(-2*var(--scale))] max-md:max-w-[calc(658*var(--scale))] max-lg:p-[calc(36*var(--scale))calc(50*var(--scale))] max-lg:max-w-[calc(391*var(--scale))] max-lg:min-h-[calc(301*var(--scale))] max-lg:left-[calc(-50*var(--scale))] max-lg:bottom-[calc(-35*var(--scale))] max-lg:gap-[calc(12*var(--scale))] absolute bottom-[calc(-68*var(--scale))] left-[calc(-84*var(--scale))] max-w-[calc(528*var(--scale))] max-h-[calc(463*var(--scale))] bg-black z-10 p-[calc(54*var(--scale))calc(75*var(--scale))] flex flex-col gap-[calc(18*var(--scale))]">
              <CardHeadings
                spaceY={"space-y-2"}
                title={'There is nothing great about us except - You'}
                titleClass={'max-lg:max-w-[calc(180*var(--scale))] text-white text-[calc(1*var(--size-38))] max-w-[calc(287*var(--scale))] leading-[1.37] font-bold'}
                subTitle={'We are a bunch of aspirational wealth managers, Investment experts, research analysts, and Product managers who bring a combined experience of more than 15 years to the table.'}
                subTitleClass={'max-lg:text-[calc(14*var(--scale))] max-lg:leading-[1.43] text-white text-[calc(1*var(--size-20))] leading-[1.3] opacity-[0.8]'}
              />
            </div>
            <div className="max-sm:left-[calc(-28*var(--scale))] max-sm:w-[117.5%] max-sm:h-[calc(203*var(--scale))] max-sm:p-0 max-md:pl-[calc(38*var(--scale))] max-md:right-0 relative h-full bg-black">
              <div className="max-md:w-[calc(702*var(--scale))] h-full w-full opacity-1 transition ease-in duration-500 object-contain bg-black relative overflow-hidden">
                <Image fill={true} src={"/about-us-bg-01.jpg"} className="object-cover " alt='kasdkasj' />
                {/* <AspectRatio ratio={16 / 7.56} className={""}>
                </AspectRatio> */}
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-black/35"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40 pb-32 flex flex-col justify-center items-center dark:bg-gray-radial">
        <div className="w-11/12 mx-auto px-4 sm:px-3 md:px-5">
          <div className="">
            <CardHeadings
              spaceY={"space-y-2"}
              title={'Our Alpha'}
              titleClass={'md:text-[3rem]/[3rem] sm:text-[2.2rem]/[3rem] text-[3.4rem]/[3.8rem] mb-14 font-bold'}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-10">
              {grid.map((feature) => (
                <div
                  key={feature.title}
                  className="border-2 border-gray-200/50 relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-10 rounded-3xl overflow-hidden"
                >
                  <GradientGrid size={20} />
                  <p className="md:text-[2.2rem]/[2.6rem] text-[2.2rem]/[3rem] font-light text-neutral-800 dark:text-white relative z-20">
                    {feature.title}
                  </p>
                  <p className="md:text-[1.2rem]/[2rem] text-[2.2rem]/[3rem] text-neutral-600 dark:text-neutral-400 mt-10 font-normal relative z-20">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className="w-11/12 mx-auto pt-0 pb-32 sm:px-3 md:px-5">
        <div className="max-sm:flex-col max-sm:py-[calc(18*var(--scale))] max-sm:gap-[calc(35*var(--scale))] max-sm:mt-[calc(10*var(--scale))] max-md:flex-col max-md:gap-[calc(47*var(--scale))] max-md:py-[calc(34*var(--scale))] max-md:mt-[calc(10*var(--scale))] max-lg:gap-[calc(86*var(--scale))] max-lg:py-[calc(23*var(--scale))] max-lg:mt-[calc(30*var(--scale))] flex justify-between py-[calc(38*var(--scale))] mt-[calc(30*var(--scale)) gap-[calc(40*var(--scale))]">
          <div className="max-sm:w-full max-sm:h-[calc(158*var(--scale))] max-md:w-full max-md:h-[calc(220*var(--scale))] max-lg:w-[calc(280*var(--scale))] w-[calc(438*var(--scale))] bg-black flex justify-center items-center relative overflow-hidden">
            <CardHeadings
              spaceY={"space-y-2"}
              title={"Four corners of our Value system"}
              titleClass={'text-white font-bold p-20 text-[calc(3*var(--size-14))]/[calc(3.4*var(--size-14))]'}
            />
          </div>
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-y-[calc(17*var(--scale))] max-md:gap-y-[calc(23*var(--scale))] max-md:grid-rows-2 max-lg:gap-y-[calc(40*var(--scale))] flex-1 grid grid-cols-2 grid-rows-2 gap-y-[calc(40*var(--scale))] py-[calc(4*var(--scale))] gap-x-[calc(40*var(--scale))]">
            {grid2.map((items, index) => {
              return (
                <div key={index}>
                  {/* {items.title}
                  {items.description} */}

                  <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col p-10 relative">
                    <BorderPlusIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                    <BorderPlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                    <BorderPlusIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                    <BorderPlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                    <CardHeadings
                      spaceY={"space-y-2"}
                      title={items.title}
                      titleClass={'max-lg:max-w-[calc(180*var(--scale))] text-[calc(1*var(--size-28))] max-w-[calc(287*var(--scale))] leading-[1.37] font-bold'}
                      subTitle={items.description}
                      subTitleClass={'max-lg:text-[calc(5*var(--scale))] text-[calc(1.2*var(--size-14))] opacity-[0.8]'}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </AppPageWrapper>
  );
}
