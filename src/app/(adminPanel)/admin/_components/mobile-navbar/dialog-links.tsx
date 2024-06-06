import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IndianRupee } from 'lucide-react';
import Link from 'next/link';

export default function SideDialogLinks() {

    interface IconProps {
        className?: string;
    }

    interface DialogLinks {
        id: number | string
        href: string
        label: string
        icon?: React.ComponentType<IconProps>;
        className: string
    }

    const dialogLinks: DialogLinks[] = [
        {
            id: 1,
            label: "Privacy & cookie notice",
            href: "/text",
            icon: IndianRupee,
            className: "text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
        },
        {
            id: 1,
            label: "Terms of service",
            href: "/text",
            className: "text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
        },
        {
            id: 1,
            label: "About",
            href: "/text",
            className: "text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
        }
    ]

    return (
        <>
            {dialogLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index}>
                        <Link href={item.href} className={item.className}>
                            {Icon && <Icon className="inline-block mr-3" />}
                            {item.label}
                        </Link>
                    </div>
                );
            })}
        </>
    );
}
