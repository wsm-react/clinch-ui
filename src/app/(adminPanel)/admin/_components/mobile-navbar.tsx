import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

import Link from 'next/link';
import MobNavDialogBody from './mobile-navbar/dialog-body';



export default function MobileNavBar() {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent side='left' className='p-0'>
                <MobNavDialogBody />
            </SheetContent>
        </Sheet>
    );
}
