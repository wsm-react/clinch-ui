import { Fragment } from 'react';
import AppFooter from '../_components/app-footer';
import AppNavBar from '../_components/app-navbar';


export default function ClientInnerLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      <AppNavBar />
      {children}
      {/* <AppFooter /> */}
    </Fragment>
  );
}
