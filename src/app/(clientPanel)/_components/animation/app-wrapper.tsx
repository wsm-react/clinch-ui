"use client"

import { motion, AnimatePresence } from 'framer-motion';

export default function AppSectionWrapper({ children, ...restProps }: Readonly<{ children: React.ReactNode }>) {
    return (
        <AnimatePresence mode='wait' {...restProps}>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ delay: 0.05 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
