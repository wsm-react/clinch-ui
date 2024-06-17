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
import Link from 'next/link';
import SideDialogLinks from './dialog-links';

export default function SideDialogBody() {
    return (
        <div className='w-100'>
            {/* <SheetHeader>
                <div className="p-4 pr-8 pl-8">
                    <SheetTitle>Co. Logo</SheetTitle>
                </div>
            </SheetHeader> */}
            <SideDialogLinks />
        </div>
    );
}
