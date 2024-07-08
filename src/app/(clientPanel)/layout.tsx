import { Fragment } from 'react';
import AppFooter from './_components/app-footer';
import AppNavBar from './_components/app-navbar';
import PageStairAnimataion from './_components/animation/page-stairs';
import AppPageWrapper from './_components/animation/page-wrapper';


export default function PageScreenLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      {children}
      <AppFooter />
    </Fragment>
  );
}
