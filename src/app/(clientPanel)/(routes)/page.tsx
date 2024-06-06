import Image from "next/image";
import SectionCareer from '../_components/section-career';
import SectionExclusiveProducts from '../_components/section-exclusive-products';
import SectionInvestmentProducts from '../_components/section-investment-products';
import SectionNewsAndBlogs from '../_components/section-news-and-blogs';
import SectionPageBlock from '../_components/section-page-block';
import SectionServices from '../_components/section-services';
import SectionTestimonial from '../_components/section-testimonial';

export default function ClientIndexPage() {
  return (
    <>
      <SectionServices />
      <SectionTestimonial />
      <SectionPageBlock />
      <SectionNewsAndBlogs />
      <SectionInvestmentProducts />
      <SectionExclusiveProducts />
      <SectionCareer />
      <div className="container max-w-screen-2xl">
        <h1>ClientPageScreen page data</h1>
      </div>
    </>
  );
}
