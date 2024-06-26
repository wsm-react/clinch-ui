import { Fragment } from 'react';


export default function ClientAuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
