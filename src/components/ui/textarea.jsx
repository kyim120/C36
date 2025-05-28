import React, { forwardRef } from 'react';

export const Textarea = forwardRef(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`block w-full rounded-md border border-gray-300 bg-white px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${className}`}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
