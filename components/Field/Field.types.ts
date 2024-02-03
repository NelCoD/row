import {
  HTMLAttributes,
} from 'react';

export interface IFieldCtx {
  disabled?: boolean;
  id?: string;
  active?: boolean;
}

export type FieldContainerProps = HTMLAttributes<HTMLDivElement> & IFieldCtx;

export interface FieldWrapperProps extends HTMLAttributes<HTMLDivElement> {
  focused?: boolean;
  disabled?: boolean;
  error?: boolean;
}
