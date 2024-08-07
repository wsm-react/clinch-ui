"use client"

import Link from 'next/link';
import { MenuLinks } from '@/app/interface/client-interface';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ThemeModeToggle } from './theme-toggle';

export default function AppFooter() {

    // const pathName = usePathname();

    // const { resolvedTheme, setTheme } = useTheme();
    // const [currentTheme, setCurrentTheme] = useState<string>(resolvedTheme || 'light');

    // const updateThemeColor = (newTheme: string) => {
    //     const themeColor = newTheme === 'dark' ? '#000000' : '#ffffff';
    //     const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    //     if (metaThemeColor) {
    //         metaThemeColor.setAttribute('content', themeColor);
    //     }
    // };

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

    // useEffect(() => {
    //     updateThemeColor(currentTheme);
    // }, [currentTheme]);

    const menuLinksData1: MenuLinks[] = [

        {
            id: 1,
            label: "Faq's",
            href: "/faqs",

        },
        {
            id: 1,
            label: "Privacy & cookie notice",
            href: "/privacy-cookie-notice",

        },
        {
            id: 1,
            label: "Terms of service",
            href: "/terms-of-service",

        },
        {
            id: 1,
            label: "Privacy Policy",
            href: "/privacy-policy",

        },
        {
            id: 1,
            label: "Disclaimer",
            href: "/disclaimer",

        }
    ]
    const menuLinksData2: MenuLinks[] = [
        {
            id: 1,
            label: "About us",
            href: "/about-us",

        },
        {
            id: 1,
            label: "Try Clinch",
            href: "/get-started",

        },
        {
            id: 1,
            label: "Our Promise",
            href: "/our-promise",

        },
        {
            id: 1,
            label: "Contact Us",
            href: "/contact-us",

        }

    ]
    const menuLinksData3: MenuLinks[] = [
        {
            id: 1,
            label: "Privacy & cookie notice",
            href: "/privacy-cookie-notice",

        },
        {
            id: 1,
            label: "Terms of service",
            href: "/terms-of-service",

        },
        {
            id: 1,
            label: "Subscriptions",
            href: "/subscriptions",

        }
    ]

    const menuLinksData4: MenuLinks[] = [
        {
            id: 1,
            label: "Privacy & cookie notice",
            href: "/text",

        },
        {
            id: 1,
            label: "Terms of service",
            href: "/text",

        },
        {
            id: 1,
            label: "Subscriptions",
            href: "/text",

        }
    ]

    const footerSocial: MenuLinks[] = [
        {
            id: 1,
            label: "Privacy & cookie notice",
            href: "/privacy-cookie-notice",

        },
        {
            id: 1,
            label: "Terms of service",
            href: "/text",

        },
        {
            id: 1,
            label: "Subscriptions",
            href: "/subscriptions",

        },
        {
            id: 1,
            label: "Admin",
            href: "/admin",
            // icon: User,
        },
    ]


    return (
        <footer className="bg-black dark:bg-background">
            <div className="w-11/12 mx-auto  px-4 sm:px-3 md:px-5 space-y-16 py-20 pb-10">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                    <div>
                        <span className="font-medium text-white">Important links</span>
                        <ul className="mt-4 list-inside space-y-2">
                            {menuLinksData1.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} className="text-sm  hover:text-white text-gray-400">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <span className="font-medium text-white">Company</span>
                        <ul className="mt-4 list-inside space-y-2">
                            {menuLinksData2.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} className="text-sm  hover:text-white text-gray-400">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <span className="font-medium text-white">Contact Us</span>
                        <ul className="mt-4 list-inside space-y-2">
                            {menuLinksData3.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} className="text-sm  hover:text-white text-gray-400">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-sm text-gray-600">Clinch is powered by  is registered with SEBI Registration no. INP000007377. Mutual Fund distribution services are offered through NHOJH Distribution Services Pvt Limited, a wholly owned subsidiary with AMFI Registration No.: ARN -248439. Mutual fund investments are subject to market risks, read all scheme related documents carefully. Terms and conditions of the website are applicable. Privacy policy of the website is applicable.</div>
                </div>
                <div className="text-center border-t border-white/10 pt-14">
                    <ul className="flex justify-center space-x-5 align-middle items-center">
                        {/* {MenuLinks4.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href} className="text-sm  hover:text-white text-gray-400">
                                    {item.label}
                                </Link>
                            </li>
                        ))} */}
                        <li><ThemeModeToggle /></li>
                        <li>
                            <Link href="https://www.facebook.com/" target="_blank" className="hover:text-blue-400 text-gray-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/" target="_blank" className=" hover:text-pink-300 text-gray-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.x.com/" target="_blank" className=" hover:text-blue-400 text-gray-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </Link>
                        </li>
                    </ul>
                    <span className="block text-sm mt-5 text-gray-400">© 2021-2022 sitename. All Rights Reserved.  </span>
                </div>
            </div>
        </footer>
    );
}
