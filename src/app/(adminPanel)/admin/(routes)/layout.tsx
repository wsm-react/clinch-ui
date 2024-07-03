import { Fragment } from 'react';


export default function ParallelRoutesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
