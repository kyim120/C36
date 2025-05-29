import React from 'react';

export const Checkbox = ({ id, checked, onCheckedChange, className }) => {
  const handleChange = (e) => {
    if (onCheckedChange) {
      onCheckedChange(e.target.checked);
    }
  };

  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={handleChange}
      className={className}
    />
  );
};
