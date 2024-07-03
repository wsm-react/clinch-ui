import { Fragment } from 'react';


export default function AdminPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {


    return (
        <Fragment>
            {children}
        </Fragment>
    );
}
