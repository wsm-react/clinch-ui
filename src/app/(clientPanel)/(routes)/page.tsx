import SectionCareer from '../_components/section-career';
import SectionExclusiveProducts from '../_components/section-exclusive-products';
import SectionInvestmentProducts from '../_components/section-investment-products';
import SectionNewsAndBlogs from '../_components/section-news-and-blogs';
import SectionPageBlock from '../_components/section-page-block';
import SectionServices from '../_components/section-services';
import SectionTestimonial from '../_components/section-testimonial';
import SectionPageBanner from '../_components/section-banner';
import SectionRegisterNow from '../_components/section-register-now';

export default function ClientIndexPage() {
  return (
    <>
      <SectionPageBanner />
      <SectionServices />
      <SectionTestimonial />
      <SectionPageBlock />
      <SectionNewsAndBlogs />
      <SectionInvestmentProducts />
      <SectionExclusiveProducts />
      <SectionCareer />
      <SectionRegisterNow />
    </>
  );
}
