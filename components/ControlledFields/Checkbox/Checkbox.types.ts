import type { RegisterOptions } from 'react-hook-form';
import { CheckboxProps } from '../../Checkbox/Checkbox.types';

export interface ControlledCheckboxProps extends CheckboxProps {
  name: string;
  rules?: RegisterOptions;
}
