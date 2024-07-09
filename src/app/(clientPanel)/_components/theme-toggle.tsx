"use client"

import { Monitor, Moon, MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/_lib/utils'



export default function ThemeModeToggle() {

    const TOGGLE_CLASSES = "flex items-center gap-3 p-[.44rem] pr-[.5rem] pl-[.5rem] transition-colors relative z-10 focus-visible:ring-[none]";

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
        setTheme(newTheme);
        setCurrentTheme(newTheme);
        // console.log(newTheme);
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
        <div className={cn("relative flex w-fit items-center rounded-full border-2 border-gray-200 dark:border-gray-600")}>
            <button className={cn(TOGGLE_CLASSES, currentTheme === "light" ? "text-white" : "text-slate-400")}
                onClick={() => { handleThemeChange("light"); }}
            >
                <Sun className="relative z-10 h-4 w-4" />
                {/* <span className="relative z-10">Light</span> */}
            </button>
            <button
                className={cn(TOGGLE_CLASSES, currentTheme === "dark" ? "text-white" : "text-slate-300")}
                onClick={() => { handleThemeChange("dark"); }}
            >
                <MoonStar className="relative z-10 h-4 w-4" />
                {/* <span className="relative z-10">Dark</span> */}
            </button>
            <div
                className={cn("absolute inset-0 z-0 flex", currentTheme === "dark" ? "justify-end" : "justify-start")}
            >
                <motion.span
                    layout
                    transition={{ type: "spring", damping: 40, stiffness: 350 }}
                    className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
                />
            </div>
        </div>
    );
}


// export function ModeToggle() {

//     const { setTheme, resolvedTheme } = useTheme();
//     const [position, setPosition] = useState(resolvedTheme || '');

//     console.log(resolvedTheme);


//     useEffect(() => {
//         if (resolvedTheme) {
//             setPosition(resolvedTheme);
//         }
//     }, [resolvedTheme]);

//     return (
//         <DropdownMenu >
//             <DropdownMenuTrigger asChild>
//                 <Button variant="link" className="transition-colors hover:text-foreground/80 text-foreground/50 focus-visible:ring-[none]">
//                     <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                     <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                 </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="dark:border-0" align="end">
//                 <DropdownMenuRadioGroup value={position}
//                     onValueChange={(value) => {
//                         setPosition(value);
//                         setTheme(value);
//                     }}>
//                     <DropdownMenuRadioItem value="light"><MoonStar className="inline-block w-4 mr-2" /> Light</DropdownMenuRadioItem>
//                     <DropdownMenuRadioItem value="dark"><Sun className="inline-block w-4 mr-2" /> Dark</DropdownMenuRadioItem>
//                     <DropdownMenuRadioItem value="system"><Monitor className="inline-block w-4 mr-2" /> System</DropdownMenuRadioItem>
//                 </DropdownMenuRadioGroup>
//             </DropdownMenuContent>
//         </DropdownMenu>
//     )
// }
