"use client"

import { Monitor, Moon, MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/_lib/utils'
import { useState, useEffect } from 'react'
import { Viewport } from 'next'

export function ModeToggle() {
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
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="link" className="transition-colors hover:text-foreground/80 text-foreground/50 focus-visible:ring-[none] h-8 p-2 pt-4 pb-4 text-xs">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:border-0" align="end">
                <DropdownMenuItem
                    onClick={() => handleThemeChange('light')}
                    className={cn(theme === 'light' && 'bg-gray-200')}
                >
                    <Sun className="inline-block w-4 mr-2" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => handleThemeChange('dark')}
                    className={cn(theme === 'dark' && 'bg-blue-600')}
                >
                    <MoonStar className="inline-block w-4 mr-2" />  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => handleThemeChange('system')}
                    className={cn(theme === 'system' && 'bg-gray-200')}
                >
                    <Monitor className="inline-block w-4 mr-2" /> System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
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
