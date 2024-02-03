import { InputHTMLAttributes } from 'react';
import type { RegisterOptions } from 'react-hook-form';
import { InputProps } from '../../Input/Input.types';

export interface TextFieldProps extends InputProps {
  name: string;
  rules?: RegisterOptions;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  isNumbersOnly?: boolean;
}
