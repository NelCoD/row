import React, { ButtonHTMLAttributes } from 'react';

export const BaseButton = React.forwardRef<
HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = '', ...props }, ref) => (
    <button
      type="button"
      className={`
      ${className}
      align-middle
      text-inherit
      outline-none
      bg-none
      m-0
      p-0
      border-none
      cursor-pointer`}
      ref={ref}
      {...props}
    />
  ),
);
