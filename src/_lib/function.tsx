
import React, { Fragment } from 'react';
import { cn } from '@/_lib/utils';
import { highlightKeywordProps } from '@/app/interface/client-interface';
import { FlipWords } from '@/components/ui/flip-words';

export const HighlightKeyword: React.FC<highlightKeywordProps> = ({ text, keyword, className }) => {
  if (!keyword) return [text]; // Return the original text if keyword is undefined

  const sanitizedKeyword = keyword.trim().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape special characters
  const parts = text.split(new RegExp(`(${sanitizedKeyword})`, 'gi'));

  return parts.map((part, index) =>
    part.toLowerCase() === sanitizedKeyword.toLowerCase() ? (
      <span key={`part-${index}`} className={cn('font-bold', className ? className : "text-gray-500 dark:text-gray-300")}>
        {part}
      </span>) : (part)
  );
};

function escapeRegExp(str: string) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export const HighlightAnmiKeyword: React.FC<highlightKeywordProps> = ({ text, keyword, replaceText, animateKeywords, className }) => {
  if (!keyword) return <>{text}</>; // Return the original text if keyword is undefined

  // Escape special characters in keyword and replaceText for safe RegExp usage
  const sanitizedKeyword = escapeRegExp(keyword.trim());
  const sanitizedReplaceText = replaceText ? escapeRegExp(replaceText.trim()) : '';

  // Split text into parts based on keyword and replaceText
  const parts = text.split(new RegExp(`(${sanitizedKeyword}|${sanitizedReplaceText})`, 'gi'));

  return (
    <div className={className}>
      {parts.map((part, index) => {
        if (part.toLowerCase() === keyword.toLowerCase()) {
          // Render keyword in bold
          return (
            <span key={`bold-${index}`} className="font-bold text-gray-500 dark:text-gray-300">
              {part}
            </span>
          );
        } else if (part.toLowerCase() === replaceText?.toLowerCase() && animateKeywords && animateKeywords.length > 0) {
          return <FlipWords key={`replaceText-${index}`} words={animateKeywords} />;
        } else {
          // For other parts, join them together in a single <span>
          const words = part.split(/\s+/).join(' ');
          return (<span key={`restext-${index}`}>{words}</span>);
        }
      })}
    </div>
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
