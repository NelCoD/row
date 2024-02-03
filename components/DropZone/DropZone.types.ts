import { ReactNode } from 'react';
import { DropzoneOptions } from 'react-dropzone';

export interface DropZoneProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  dropzoneOptions?: DropzoneOptions;
  fileSetter?: (files: File[]) => void;
  name?: string;
  error?: boolean;
  required?: boolean;
  className?: string;
  rowContent?: boolean;
}