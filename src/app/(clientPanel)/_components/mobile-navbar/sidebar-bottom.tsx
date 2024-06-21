"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { cn } from '@/lib/utils';
import { Contact, FilePlus2, Newspaper, Orbit } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuLinks } from '../_interface/app-interface';



export default function SideBottomLinks() {

    const bottomLinks: MenuLinks[] = [
        {
            id: 1,
            label: "Career",
            href: "/admin/career",
            icon: Contact,
        },
        {
            id: 1,
            label: "Exclusive products",
            href: "/admin/exclusive-products",
            icon: Orbit,
        },
        {
            id: 1,
            label: "News and blogs",
            href: "/admin/blogs",
            icon: Newspaper,
        },
        {
            id: 1,
            label: "Page block",
            href: "/admin/page-block",
            icon: FilePlus2,
        }
    ]

    const pathName = usePathname();

    return (
        <div className="flex flex-row list-inside space-x-1 align-middle justify-center">
            {bottomLinks.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathName === item.href;

                return (
                    <div key={index}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link key={index} href={item.href} className={cn("text-xs p-3 text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition duration-75 rounded-lg", isActive && "bg-gray-200 text-gray-900")}>
                                        {Icon && <Icon className="inline-block w-4" />}
                                        {/* {item.label} */}
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent> <p>{item.label}</p></TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                );
            })}
        </div>
    );
}
