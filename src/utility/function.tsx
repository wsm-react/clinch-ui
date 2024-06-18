import React from 'react';

export const highlightKeyword = (text: string, keyword: string): React.ReactNode[] => {
  const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <span key={index} className="font-bold inline  text-gray-500 dark:text-white"> {part}  </span>
    ) : (part)
  );
};
