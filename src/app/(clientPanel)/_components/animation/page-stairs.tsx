"use client"

import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import SectionStair from '../sections/stairs';

export default function PageStairAnimataion() {
    const pathName = usePathname();

    return (
        <Fragment>
            <AnimatePresence mode="wait">
                <div key={pathName}>
                    <div className="h-screen w-screen fixed flex top-0 right-0 left-0 pointer-events-none z-40">
                        <SectionStair />
                    </div>
                </div>
            </AnimatePresence>
        </Fragment>
    );
}
