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
        <div>
            <SheetHeader>
                <div className="p-5">
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when youre done.
                    </SheetDescription>
                </div>
            </SheetHeader>
            <div className="flex flex-col mt-4 list-inside space-y-4">
                <SideDialogLinks />
            </div>
        </div>
    );
}
