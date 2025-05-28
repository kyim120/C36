import React from "react";

export const Card = ({ children, className, ...props }) => {
  return (
    <div className={`rounded-lg shadow-md bg-white/10 backdrop-blur-md border border-white/20 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className, ...props }) => {
  return (
    <div className={`px-4 py-2 border-b border-white/20 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, ...props }) => {
  return (
    <h3 className={`text-lg font-semibold text-white ${className}`} {...props}>
      {children}
    </h3>
  );
};

export const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
