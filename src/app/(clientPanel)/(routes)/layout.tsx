import { Fragment } from 'react';
import AppNavBar from '../_components/app-navbar';
import AppPageWrapper from '../_components/animation/page-wrapper';
import PageStairAnimataion from '../_components/animation/page-stairs';


export default function ClientInnerLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      <AppNavBar />
      {/* <PageStairAnimataion /> */}
      {children}
    </Fragment>
  );
}
