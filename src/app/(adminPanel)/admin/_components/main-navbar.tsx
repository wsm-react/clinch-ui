import Image from "next/image";
import Link from 'next/link';

export default function MobNavDialogBody() {
    return (
        <div className="aassa hidden">
            <div className="flex items-center gap-4 text-sm lg:gap-6">
                <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Home Page</Link>
                <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Home Page</Link>
                <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Home Page</Link>
                <Link href='/' className='transition-colors hover:text-foreground/80 text-foreground/60' >Home Page</Link>
            </div>
        </div>
    );
}
