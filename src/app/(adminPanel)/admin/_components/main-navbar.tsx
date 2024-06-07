import Image from "next/image";
import Link from 'next/link';

export default function MobNavDialogBody() {
    return (
        <div className="flex justify-between align-middle flex-1 ml-3">
            <div className="flex items-center gap-4 font-bold">
                <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Logo</Link>
            </div>
            <div className="flex items-center gap-4">
                <div className="items-center gap-4 text-sm lg:gap-6 md:hidden">
                    <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Logout</Link>
                </div>
                <div className="hidden lg:block">
                    <div className="flex flex-row gap-4 text-sm lg:gap-6">
                        <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Home Page</Link>
                        <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Home Page</Link>
                        <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Home Page</Link>
                        <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
