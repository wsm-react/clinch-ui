import SectionCareer from '../_components/home-section/section-career';
import SectionExclusiveProducts from '../_components/home-section/section-exclusive-products';
import SectionServices from '../_components/home-section/section-services';
import SectionTestimonial from '../_components/home-section/section-testimonial';
import SectionPageBanner from '../_components/home-section/section-banner';
import SectionRegisterNow from '../_components/home-section/section-register-now';
import SectionWealthManager from '../_components/home-section/section-wealth-manager';
import CardWeServe from '../_components/home-section/section-serve';
import SectionHelpYou from '../_components/home-section/section-help-you';
import { Fragment } from 'react';
import SectionPortfolio from '../_components/home-section/section-portfolio';


export default function ClientIndexPage() {
  return (
    <Fragment>
      <SectionPageBanner />
      <SectionServices />
      <SectionWealthManager />
      <SectionPortfolio />
      {/* <SectionExclusiveProducts /> */}
      <CardWeServe />
      <SectionTestimonial />
      <SectionCareer />
      <SectionHelpYou />
      <SectionRegisterNow />
    </Fragment>
  );
}
