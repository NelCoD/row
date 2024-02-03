import React, {
  ChangeEvent,
  forwardRef,
  useState,
} from 'react';

import clsx from 'clsx';

import { OptionalLabel } from '../OptionalLabel';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    className,
    children,
    defaultChecked = false,
    onChange = () => { },
    inputClassName,
    labelClassName,
    error,
    ...htmlCheckboxProps
  } = props;

  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange(event);
  };

  return (
    <div
      className={`${className} relative inline-flex justify-start cursor-pointer`}
    >
      <OptionalLabel
        className={`${labelClassName} ${error ? '!text-error' : ''}`}
        pass={!children}
        label={children}
      >
        <input
          type="checkbox"
          className={clsx(
            inputClassName,
            'checked:bg-check-mark',
            'w-4 h-4 no-appearance appearance-none cursor-[inherit] duration-200 bg-no-repeat',
            'checked:bg-beige checked:border-none border rounded-[2px] bg-[50%_30%] bg-[length:68%]',
            error ? 'border-error' : 'border-beige/50',
            'hover:border-beige group-hover:border-beige',
          )}
          checked={checked}
          onChange={handleChange}
          ref={ref}
          {...htmlCheckboxProps}
        />
      </OptionalLabel>
    </div>
  );
});
