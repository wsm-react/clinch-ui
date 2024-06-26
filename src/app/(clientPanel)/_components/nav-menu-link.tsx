"use client"

import { cn } from '@/_lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './mode-toggle';
import { MenuLinks } from './_interface/app-interface';



export default function MenuLink() {

    const menuLinks: MenuLinks[] = [
        // {
        //     id: 1,
        //     label: "Home",
        //     href: "/",
        //     // icon: User,
        // },
        // {
        //     id: 1,
        //     label: "About Us",
        //     href: "/about-us",
        //     // icon: User,
        // },
        // {
        //     id: 1,
        //     label: "Contact us",
        //     href: "/contact-us",
        //     // icon: User,
        // },
        {
            id: 1,
            label: "Get started",
            href: "/get-started",
            button: true
            // icon: User,
        }
        // ,
        // {
        //     id: 1,
        //     label: "Admin",
        //     href: "/admin",
        //     // icon: User,
        // },
    ]

    const pathName = usePathname();

    return (
        <div className="flex flex-row items-center">
            <div className="flex flex-row gap-4 text-sm lg:gap-8 items-center mr-4">
                {menuLinks.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = pathName === item.href;
                    const button = item.button;
                    return (
                        <Link key={index} href={item.href} className={cn("transition-all focus-visible:ring-[none] flex flex-row items-center", button === true ? "rounded-full p-6 pt-3 pb-3 text-[1rem] font-semibold text-white bg-blue-800 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700" : "hover:text-foreground/80 text-foreground/50", isActive && "bg-blue-700")}>
                            {Icon && <Icon className="inline-block w-4 mr-2" />}
                            {item.label}
                        </Link>
                    );
                })}
            </div>
            <ModeToggle />
        </div>
    );
}
