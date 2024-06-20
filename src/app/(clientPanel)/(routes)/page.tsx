import SectionCareer from '../_components/section-career';
import SectionExclusiveProducts from '../_components/section-exclusive-products';
import SectionServices from '../_components/section-services';
import SectionTestimonial from '../_components/section-testimonial';
import SectionPageBanner from '../_components/section-banner';
import SectionRegisterNow from '../_components/section-register-now';
import SectionWealthManager from '../_components/section-wealth-manager';
import CardWeServe from '../_components/section-serve';
import SectionBlogs from '../_components/section-blogs';


export default function ClientIndexPage() {
  return (
    <>
      <SectionPageBanner />
      <SectionServices />
      <SectionWealthManager />
      <SectionExclusiveProducts />
      <CardWeServe />
      <SectionTestimonial />
      {/* <SectionBlogs /> */}
      <SectionCareer />
      <SectionRegisterNow />
    </>
  );
}
