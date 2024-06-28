"use client"


import Link from 'next/link';
import { useRouter } from 'next/router';
import { X } from 'lucide-react';
// import dynamic from 'next/dynamic';
// import AppLogoLight from '/public/logo-dark.svg'; // Adjust the import based on your project structure
// import AppLogoDark from '/public/logo-dark.svg'; // Adjust the import based on your project structure


export function NavGoBack() {
    // const { resolvedTheme } = useTheme();
    // const pathName = usePathname();
    // const router = useRouter();

    const goBack = () => {
        // router.back();
    };


    return (
        <Link href={'/'} onClick={goBack}>
            <X strokeWidth={1.5} className='transition-all border border-slate-300 text-slate-500 p-1 h-8 w-8 rounded-xl hover:text-blue-700 hover:border-blue-700' />
        </Link>
    );
}
