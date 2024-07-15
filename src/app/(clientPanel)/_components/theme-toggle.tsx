"use client"

import { Monitor, Moon, MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/_lib/utils'


const TOGGLE_CLASSES = "text-sm font-medium flex items-center gap-2 p-[.3rem] transition-colors relative z-10";

export function ThemeModeToggle() {

    const { setTheme, resolvedTheme, theme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState<string>(resolvedTheme || 'dark');

    useEffect(() => {
        if (resolvedTheme) {
            setCurrentTheme(resolvedTheme);
            updateThemeColor(resolvedTheme);
        }
    }, [resolvedTheme]);

    // console.log(theme);

    const handleThemeChange = (newTheme: string) => {
        // console.log(newTheme);

        setTheme(newTheme);
        setCurrentTheme(newTheme);
        updateThemeColor(newTheme);
    };

    const updateThemeColor = (newTheme: string) => {
        const themeColor = newTheme === 'dark' ? '#000000' : '#ffffff';
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');

        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', themeColor);
        }
    };

    useEffect(() => {
        updateThemeColor(currentTheme);
    }, [currentTheme]);


    return (
        <div className={cn("relative flex w-fit items-center rounded-full border border-white/30 dark:border-white/20")}>
            <SliderToggle selected={theme} className={TOGGLE_CLASSES} setSelected={handleThemeChange} />
        </div>
    );
}


const SliderToggle = ({ selected, className, setSelected }: any) => {
    // console.log(selected);

    return (
        <div className="relative flex w-fit items-center rounded-full">
            <button
                className={cn(className, selected === "light" ? "text-white" : "text-slate-300")}
                onClick={() => {
                    setSelected("light");
                }}
            >
                <MoonStar className="relative z-10 h-4 w-4" />
                {/* <FiMoon className="relative z-10 text-lg md:text-sm" /> */}
                {/* <span className="relative z-10">Light</span> */}
            </button>
            <button
                className={cn(className, selected === "dark" ? "text-white" : "text-slate-300")}
                onClick={() => {
                    setSelected("dark");
                }}
            >
                {/* <Sun className="relative z-10 text-lg md:text-sm" /> */}
                <Sun className="relative z-10 h-4 w-4" />
                {/* <span className="relative z-10">Dark</span> */}
            </button>
            <div
                className={`absolute inset-0 z-0 flex ${selected === "dark" ? "justify-end" : "justify-start"
                    }`}
            >
                <motion.span
                    layout
                    transition={{ type: "spring", damping: 15, stiffness: 250 }}
                    className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
                />
            </div>
        </div>
    );
};
