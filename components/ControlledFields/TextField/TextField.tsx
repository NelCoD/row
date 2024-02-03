import { Controller, useFormContext } from 'react-hook-form';
import { TextFieldProps } from './TextField.types';
import { Input } from '../../Input';

export const TextField = (props: TextFieldProps) => {
  const {
    name,
    rules,
    onChange,
    type,
    isNumbersOnly,
    ...inputProps
  } = props;
  const { control, formState: { errors } } = useFormContext();
  const errorMsg = errors[name]?.message as string | undefined;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Input
          errorMsg={errorMsg}
          error={!!errors[name]}
          value={field.value}
          name={field.name}
          onBlur={field.onBlur}
          onChange={(e) => {
            if (isNumbersOnly && !e.target.value.match(/^\d+$/) && e.target.value) return;
            onChange?.(e);
            field.onChange(e);
          }}
          inputCallbackRef={field.ref}
          type={type}
          {...inputProps}
        />
      )}
    />
  );
};
