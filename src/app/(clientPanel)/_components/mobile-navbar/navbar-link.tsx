"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { cn } from '@/lib/utils';
import { Home, Newspaper, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuLinks } from '../_interface/app-interface';



export default function NavbarLink() {

    const bottomLinks: MenuLinks[] = [
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
        <div className="flex flex-row gap-4 text-sm lg:gap-8">
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
        </div>
    );
}
