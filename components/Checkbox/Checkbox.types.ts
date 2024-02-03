import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  defaultChecked?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  error?: boolean;
}
