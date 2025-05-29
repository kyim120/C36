import React from 'react';

export const Badge = ({ className = '', ...props }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-800 ${className}`}
      {...props}
    />
  );
};
