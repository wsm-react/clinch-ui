"use client"

import { MenuLinks } from '@/app/(clientPanel)/_components/_interface/app-interface';
import { cn } from '@/_lib/utils';
import { BriefcaseBusiness, Contact, Earth, FilePlus2, IndianRupee, LayoutDashboard, MessageSquareDiff, Newspaper, Orbit } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideDialogLinks() {

    const dialogLinks: MenuLinks[] = [
        {
            id: 1,
            label: "Dashboard",
            href: "/admin",
            icon: LayoutDashboard,
        },
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
            label: "Blogs",
            href: "/admin/blogs",
            icon: Newspaper,
        },
        {
            id: 1,
            label: "News",
            href: "/admin/news",
            icon: Newspaper,
        },
        {
            id: 1,
            label: "Page block",
            href: "/admin/page-block",
            icon: FilePlus2,
        },
        {
            id: 1,
            label: "Services",
            href: "/admin/services",
            icon: BriefcaseBusiness,
        },
        {
            id: 1,
            label: "Testimonial",
            href: "/admin/testimonial",
            icon: MessageSquareDiff,
        },
        {
            id: 1,
            label: "Why Us",
            href: "/admin/why-us",
            icon: Earth,
        },
    ]

    const pathName = usePathname();

    return (
        <div className="flex flex-col p-4 list-inside pr-4 pl-4 space-y-1 overflow-y-auto">
            {dialogLinks.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathName === item.href;

                return (
                    <Link key={index} href={item.href} className={cn("transition-all text-sm p-3 pl-3 pr-3 text-gray-500 hover:text-gray-900 hover:bg-gray-200  w-full rounded-lg", "dark:text-white dark:hover:bg-blue-800 dark:hover:text-white/70", isActive && "bg-gray-200 text-gray-900 dark:bg-blue-600 dark:text-white")}>
                        {Icon && <Icon className="inline-block w-5 mr-3 text-sm" />}
                        {item.label}
                    </Link>
                );
            })}
        </div>
    );
}
