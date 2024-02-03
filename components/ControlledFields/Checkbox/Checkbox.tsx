import { Controller, useFormContext } from 'react-hook-form';
import { ControlledCheckboxProps } from './Checkbox.types';
import { Checkbox } from '../../Checkbox';

export const ControlledCheckbox = (props: ControlledCheckboxProps) => {
  const {
    name,
    rules,
    onChange,
    ...checkBoxProps
  } = props;
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, ...restField } }) => (
        <Checkbox
          error={!!errors[name]}
          checked={value}
          {...restField}
          {...checkBoxProps}
        />
      )}
    />
  );
};
