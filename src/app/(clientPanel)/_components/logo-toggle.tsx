"use client"

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
// import dynamic from 'next/dynamic';
// import AppLogoLight from '/public/logo-dark.svg'; // Adjust the import based on your project structure
// import AppLogoDark from '/public/logo-dark.svg'; // Adjust the import based on your project structure


export function LogoToggle() {
    const { resolvedTheme } = useTheme();
    const [LogoComponent, setLogoComponent] = useState<any>("null");

    useEffect(() => {
        // Determine which logo component to use based on the resolved theme
        const getLogoComponent = async () => {
            if (resolvedTheme === 'light') {
                const { default: AppLogoLight } = await import('/public/logo-dark.svg');
                setLogoComponent(() => AppLogoLight);
            } else {
                const { default: AppLogoDark } = await import('/public/logo.svg');
                setLogoComponent(() => AppLogoDark);
            }
        };

        // Call the function when the theme changes or on component mount
        getLogoComponent();
    }, [resolvedTheme]);

    return LogoComponent ? <LogoComponent alt='logo' width={140} height={0} className='h-auto pt-5 pb-5' /> : null;
}
