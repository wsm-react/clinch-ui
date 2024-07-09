
import React from 'react';
import { cn } from '@/_lib/utils';
import { highlightKeywordProps } from '@/app/interface/client-interface';

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

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const mobileRegExp = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;


export function parseURLSearchParams(searchParams: URLSearchParams): Record<string, string> {
  const paramsObject: Record<string, string> = {};

  // Iterate over each key-value pair in the URLSearchParams
  for (const [key, value] of searchParams.entries()) {
    paramsObject[key] = value;
  }

  return paramsObject;
}
