"use client"

import { cn } from '@/_lib/utils';
import { Home, Newspaper, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './mode-toggle';



export default function NavbarLink() {

    interface IconProps {
        className?: string;
    }

    interface BottomLinks {
        id: number | string
        href: string
        label: string
        icon?: React.ComponentType<IconProps>;
    }

    const bottomLinks: BottomLinks[] = [
        {
            id: 1,
            label: "Website",
            href: "/",
            icon: Home,
        },
        {
            id: 1,
            label: "User",
            href: "/admin/user",
            icon: User,
        }
    ]

    const pathName = usePathname();

    return (
        <div className="flex flex-row gap-4 text-sm lg:gap-8 items-center">
            {bottomLinks.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathName === item.href;

                return (
                    <Link key={index} href={item.href} className={cn("transition-colors hover:text-foreground/80 text-foreground/50", isActive && "text-foreground/100")}>
                        {Icon && <Icon className="inline-block w-4 mr-2" />}
                        {item.label}
                    </Link>
                );
            })}
            <ModeToggle />
        </div>
    );
}
