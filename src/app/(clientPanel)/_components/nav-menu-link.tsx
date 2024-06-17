"use client"

import { cn } from '@/lib/utils';
import { Newspaper, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './mode-toggle';



export default function MenuLink() {

    interface IconProps {
        className?: string;
    }

    interface MenuLinks {
        id: number | string
        href: string
        label: string
        icon?: React.ComponentType<IconProps>;
    }

    const menuLinks: MenuLinks[] = [
        {
            id: 1,
            label: "Home",
            href: "/",
            // icon: User,
        },
        {
            id: 1,
            label: "About Us",
            href: "/about-us",
            // icon: User,
        },
        {
            id: 1,
            label: "Contact us",
            href: "/contact-us",
            // icon: User,
        },
        {
            id: 1,
            label: "Get started",
            href: "/get-started",
            // icon: User,
        },
        {
            id: 1,
            label: "Admin",
            href: "/admin",
            // icon: User,
        },
    ]

    const pathName = usePathname();

    return (
        <div className="flex flex-row items-center">
            <div className="flex flex-row gap-4 text-sm lg:gap-8 items-center mr-4">
                {menuLinks.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = pathName === item.href;
                    return (
                        <Link key={index} href={item.href} className={cn("transition-colors hover:text-foreground/80 text-foreground/50", isActive && "text-foreground/100")}>
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
