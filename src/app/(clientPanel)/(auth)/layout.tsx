import { Fragment } from 'react';
import AppPageWrapper from '../_components/animation/page-wrapper';



export default function ClientAuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      <AppPageWrapper>
        {children}
      </AppPageWrapper>
    </Fragment>
  );
}
