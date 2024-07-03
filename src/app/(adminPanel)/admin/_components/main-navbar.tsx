import Image from "next/image";
import Link from 'next/link';
import NavbarLink from './mobile-navbar/navbar-link';
import AdminLogo from './logo-toggle';


export default function MobNavDialogBody() {
    return (
        <div className="flex justify-between align-middle flex-1 ml-3">
            <div className="flex items-center gap-4 font-bold">
                <Link href='/admin' className='transition-colors text-[1.6rem]/[1.6rem] hover:text-foreground/80 text-foreground/60' >Logo</Link>
                {/* <AdminLogo href={'/admin'} /> */}
            </div>
            <div className="flex items-center gap-4">
                <div className="items-center gap-4 text-sm lg:gap-6 md:hidden">
                    <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Logout</Link>
                </div>
                <div className="hidden lg:block mr-6">
                    <NavbarLink />
                </div>
            </div>
        </div>
    );
}
