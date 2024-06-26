import { Fragment } from 'react';
import AppFooter from './_components/app-footer';
import AppNavBar from './_components/app-navbar';


export default function PageScreenLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
