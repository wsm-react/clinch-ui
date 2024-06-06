import AppFooter from './_components/app-footer';
import AppNavBar from './_components/app-navbar';
import SectionCareer from './_components/section-career';
import SectionExclusiveProducts from './_components/section-exclusive-products';
import SectionInvestmentProducts from './_components/section-investment-products';
import SectionNewsAndBlogs from './_components/section-news-and-blogs';
import SectionPageBlock from './_components/section-page-block';
import SectionServices from './_components/section-services';
import SectionTestimonial from './_components/section-testimonial';


export default function ClientLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AppNavBar />
      {children}
      <AppFooter />
    </>
  );
}
