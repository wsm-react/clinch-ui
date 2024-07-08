import SectionCareer from '../_components/sections/section-career';
import SectionExclusiveProducts from '../_components/sections/section-exclusive-products';
import SectionServices from '../_components/sections/section-services';
import SectionTestimonial from '../_components/sections/section-testimonial';
import SectionPageBanner from '../_components/sections/section-banner';
import SectionRegisterNow from '../_components/sections/section-register-now';
import SectionWealthManager from '../_components/sections/section-wealth-manager';
import CardWeServe from '../_components/sections/section-serve';
import SectionHelpYou from '../_components/sections/section-help-you';
import { Fragment } from 'react';
import SectionPortfolio from '../_components/sections/section-portfolio';
import SectionPrivateWealth from '../_components/sections/section-private-wealth';
import SectionServicesBlock from '../_components/sections/section-services-block';
import AppPageWrapper from '../_components/animation/page-wrapper';


export default function ClientIndexPage() {
  return (
    <Fragment>
      <SectionPageBanner />
      <SectionPrivateWealth />
      {/* <SectionServices /> */}
      <SectionServicesBlock />
      <SectionPortfolio />
      <SectionWealthManager />
      {/* <SectionExclusiveProducts /> */}
      <CardWeServe />
      <SectionTestimonial />
      <SectionCareer />
      <SectionHelpYou />
      <SectionRegisterNow />
    </Fragment>
  );
}
