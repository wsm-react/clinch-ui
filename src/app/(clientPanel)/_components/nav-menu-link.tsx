"use client"

import { cn } from '@/lib/utils';
import { Newspaper, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



export default function NavMenuLink() {

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
            label: "User",
            href: "/user",
            icon: User,
        },
        {
            id: 1,
            label: "User",
            href: "/user",
            icon: User,
        },
        {
            id: 1,
            label: "User",
            href: "/user",
            icon: User,
        },
        {
            id: 1,
            label: "User",
            href: "/user",
            icon: User,
        },
        {
            id: 1,
            label: "User",
            href: "/user",
            icon: User,
        },
    ]

    const pathName = usePathname();

    return (
        <div className="flex flex-row gap-4 text-sm lg:gap-8">
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
    );
}
