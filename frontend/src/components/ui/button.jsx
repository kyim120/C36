import React, { forwardRef } from 'react';

const variantClasses = {
  default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-blue-500',
  secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-blue-500',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-blue-500',
  link: 'bg-transparent underline text-blue-600 hover:text-blue-700 focus:ring-blue-500',
};

const sizeClasses = {
  default: 'px-4 py-2',
  sm: 'px-3 py-1.5 text-sm',
  lg: 'px-6 py-3 text-lg',
};

export const Button = forwardRef(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const variantClass = variantClasses[variant];
    const sizeClass = sizeClasses[size];
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClass} ${sizeClass} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
