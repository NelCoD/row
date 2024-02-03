import React, { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'transparent' | 'default' | 'outlined',
  fullWidth?: boolean;
  size?: 'medium' | 'medium-s' | 'small' | 'extra small';
  uppercase?: boolean;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    fullWidth,
    size = 'medium',
    variant = 'default',
    uppercase = true,
    children,
    loading,
    disabled,
    ...restProps
  } = props;
  return (
    <button
      className={clsx(
        'bg-yellow-600 text-black relative',
        !disabled && 'hover:bg-yellow-500 duration-200',
        'active:text-black active:bg-beige',
        'disabled:cursor-not-allowed disabled:bg-beige/50 disable:text-black/50',
        size === 'medium' && 'h-[60px] w-72 p-5 text-title-4',
        size === 'medium-s' && 'h-[54px] p-4 text-text-3',
        size === 'small' && 'h-[48px] p-3 text-title-4',
        size === 'extra small' && 'h-[40px] p-2.5 text-text-1',
        className,
        variant === 'transparent' && 'bg-transparent !text-beige disabled:bg-transparent disabled:!text-beige/50 active:bg-transparent',
        variant === 'transparent' && !disabled && 'hover:border-none',
        variant === 'outlined' && '!bg-transparent border border-beige/50',
        variant === 'outlined' && (disabled ? '!text-beige/50' : 'hover:!bg-beige hover:!text-black !text-beige !border-beige'),
        fullWidth && 'w-full',
        uppercase && 'uppercase',
        loading && '!text-transparent',
      )}
      disabled={disabled}
      {...restProps}
    >
      {loading && (
        <div
          className="absolute left-[calc(50%-12px)] top-[calc(50%-12px)] w-[24px] h-[24px] rounded-full border-2 border-beige border-r-transparent mx-auto animate-spin"
        />
      )}
      {children}
    </button>
  );
};
