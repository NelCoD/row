import { Controller, useFormContext } from 'react-hook-form';
import { ControlledDropZoneProps } from './Dropzone.types';
import { DropZone } from '../../DropZone';

export const ControlledDropzone = (props: ControlledDropZoneProps) => {
  const {
    name,
    rules,
    ...dropzoneProps
  } = props;
  const { control, formState: { errors } } = useFormContext();
  const errorMsg = errors[name]?.message as string | undefined;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <DropZone
          // errorMsg={errorMsg}
          error={!!errors[name]}
          name={field.name}
          fileSetter={field.onChange}
          {...dropzoneProps}
        />
      )}
    />

  );
};
