import {
  ReactNode,
  InputHTMLAttributes,
  RefObject,
  RefCallback,
} from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
  prefix?: ReactNode;
  postfix?: ReactNode;
  defaultValue?: string;
  inputRef?: RefObject<HTMLInputElement>;
  inputCallbackRef?: RefCallback<HTMLInputElement>;
  onPressEnter?: React.KeyboardEventHandler;
  label?: ReactNode;
  error?: boolean;
  errorMsg?: string;
  required?: boolean;
  inputClassName?: string;
  activateByValue?: boolean;
  wrapperClassName?: string;
  labelClassName?: string;
  size?: 'medium' | 'large' | 'small';
}
