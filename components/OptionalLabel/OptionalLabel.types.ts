import {
  HTMLAttributes,
  ReactNode,
} from 'react';

export interface OptionalLabelProps extends HTMLAttributes<HTMLLabelElement> {
  pass?: boolean;
  label?: ReactNode;
  disabled?: boolean;
}
