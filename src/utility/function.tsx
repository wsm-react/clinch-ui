import { highlightKeywordProps } from '@/app/(clientPanel)/_components/_interface/app-interface';
import { cn } from '@/_lib/utils';
import React from 'react';
import { text } from 'stream/consumers';
import { useTheme } from 'next-themes';

export const HighlightKeyword: React.FC<highlightKeywordProps> = ({ text, keyword, className }) => {
  if (!keyword) return [text]; // Return the original text if keyword is undefined

  const sanitizedKeyword = keyword.trim().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape special characters
  const parts = text.split(new RegExp(`(${sanitizedKeyword})`, 'gi'));

  return parts.map((part, index) =>
    part.toLowerCase() === sanitizedKeyword.toLowerCase() ? (
      <span key={index} className={cn('font-bold', className ? className : "text-gray-500 dark:text-gray-300")}>
        {part}
      </span>) : (part)
  );
};

export function PadWithZero(number: number): string {
  return number < 10 ? `0${number}` : `${number}`;
}

export function GetAvatarName(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');
}

export const EscapeSpecialChars = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};




export default function ChangeThemeAsPerPath(pathName: string) {
  const { setTheme } = useTheme();


  const updateThemeColor = (newTheme: string) => {
    const themeColor = newTheme === 'dark' ? '#000000' : '#ffffff';
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColor);
    }
  };

  const handlePathChange = (path: string) => {
    if (path === pathName) {
      setTheme('light'); // Update the theme to 'light'
      updateThemeColor('light');
    } else {
      const newTheme = 'light'; // Default to light theme for other paths, adjust as necessary
      updateThemeColor(newTheme);
    }
  };

  if (typeof window !== 'undefined') {
    handlePathChange(pathName);
  }
}
