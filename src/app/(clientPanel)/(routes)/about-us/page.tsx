import AppPageWrapper from '../../_components/animation/page-wrapper';
import CardHeadings from '../../_components/cards/headings';
import { TextGenerateEffect } from '../../_components/cards/text-generate-effect';
import ThemeModeToggle from '../../_components/theme-toggle';


export default function AboutUsPage() {
  return (
    <AppPageWrapper>
      <div className="pt-20 pb-20 min-h-[calc(100vh-40vh)] sm:min-h-[calc(100vh-16vh)] flex flex-col justify-center items-center dark:bg-gray-radial">
        <div className="w-11/12 mx-auto px-4 sm:px-3 md:px-5">
          {/* <ThemeModeToggle /> */}
          <div className="container max-w-screen-sm md:mt-10 mt-4">
            <TextGenerateEffect words={'We are a bunch of aspirational wealth managers, Investment experts, research analysts, and Product managers who bring a combined experience of more than 15 years to the table.'} />
          </div>
          <div className="md:flex-row flex flex-col justify-between items-top">
            <div className="w-full md:basis-[38%]">
              <CardHeadings
                spaceY={"space-y-2"}
                title={'There is nothing great about us except - You'}
                titleClass={'xl:text-[3.2rem]/[3.6rem] lg:text-[4rem]/[6rem] md:text-[2.8rem]/[4rem] sm:text-[2.2rem]/[3rem] text-[3.4rem]/[3.8rem] font-bold'}
                subTitle={'Popular Topics'}
                subTitleClass={'sm:text-[1.8rem] text-[1.6rem]'}
              />
            </div>
            <div className="w-full md:basis-[60%] md:mt-0 mt-10">
              We are a bunch of aspirational wealth managers, Investment experts, research analysts, and Product managers who bring a combined experience of more than 15 years to the table.
            </div>
          </div>
        </div>
      </div>
    </AppPageWrapper>
  );
}
