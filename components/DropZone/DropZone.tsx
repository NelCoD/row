import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import { DropZoneProps } from './DropZone.types';
import { Field } from '../Field';

export const DropZone = ({
  title = 'Verification image',
  subtitle = 'download',
  dropzoneOptions,
  fileSetter,
  name,
  error,
  required,
  className = '',
  rowContent,
}: DropZoneProps) => {
  const [errorMsg, setErrorMsg] = useState('');
  const initRef = useRef(false);
  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
    if (!fileRejections.length) {
      setErrorMsg('');
    }

    fileRejections.forEach((file) => {
      file.errors.forEach((err) => {
        switch (err.code) {
          case 'file-invalid-type':
            setErrorMsg('Неверный тип файла');
            break;
          case 'file-too-large':
            setErrorMsg('Cлишком большой размер файла');
            break;
          case 'too-many-files':
            setErrorMsg('Загрузите один файл');
            break;
          default:
            break;
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    ...dropzoneOptions,
  });

  useEffect(() => {
    if (initRef.current) {
      fileSetter?.(acceptedFiles);
    }
    initRef.current = true;
  }, [acceptedFiles]);

  const filesLoaded = !!acceptedFiles.length;

  return (
    <div
      className={`${className} group`}
      {...getRootProps()}
    >
      <Field.OuterLabel>
        {title}
        {required && (
          <span className="text-error ml-0.5">*</span>
        )}
      </Field.OuterLabel>
      <div
        className={clsx(
          'border border-dashed min-h-[80px] py-2.5 px-[12px] cursor-pointer relative duration-200',
          (error || errorMsg) ? '!border-error' : 'border-beige/50',
          'rounded-md flex items-center group-hover:border-beige',
          isDragActive && 'bg-beige/5',
        )}
      >
        <input name={name} {...getInputProps()} />
        <div className="flex justify-center items-center w-full">
          {subtitle && !filesLoaded && (
            <p className="text-text-7 whitespace-pre-line">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {errorMsg && (
        <Field.Error>
          {errorMsg}
        </Field.Error>
      )}
    </div>
  );
};