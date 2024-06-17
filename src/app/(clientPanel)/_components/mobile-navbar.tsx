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
import SideDialogBody from './mobile-navbar/dialog-body';



export default function MobileNavBar() {
    return (
        <Sheet>
            <SheetTrigger className='md:hidden '>
                <Menu />
            </SheetTrigger>
            <SheetContent side='left' className='p-0'>
                <SideDialogBody />
            </SheetContent>
        </Sheet>
    );
}
