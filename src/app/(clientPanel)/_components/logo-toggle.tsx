"use client"

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
// import dynamic from 'next/dynamic';
// import AppLogoLight from '/public/logo-dark.svg'; // Adjust the import based on your project structure
// import AppLogoDark from '/public/logo-dark.svg'; // Adjust the import based on your project structure


export function LogoToggle() {
    // const { resolvedTheme } = useTheme();
    const { resolvedTheme, setTheme } = useTheme();
    const [LogoComponent, setLogoComponent] = useState<any>("null");

    const pathName = usePathname();

    const [currentTheme, setCurrentTheme] = useState<string>(resolvedTheme || 'light');

    const updateThemeColor = (newTheme: string) => {
        const themeColor = newTheme === 'dark' ? '#000000' : '#ffffff';
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');

        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', themeColor);
        }
    };

    // useEffect(() => {
    //     // Ensure this runs only on the client side
    //     if (pathName === "/") {
    //         setTheme('dark'); // Update the theme to 'light'
    //         updateThemeColor('dark');
    //     } else if (pathName === "/get-started") {
    //         setTheme('light'); // Update the theme to 'light'
    //         updateThemeColor('light');
    //     } else {
    //         setTheme('light');
    //         updateThemeColor('light');
    //     }
    // }, [pathName, currentTheme, setTheme]);

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

    return LogoComponent ? <LogoComponent alt='logo' width={180} height={0} className='h-auto pt-5 pb-5' /> : null;
}
