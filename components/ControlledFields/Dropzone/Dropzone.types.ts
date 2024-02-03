import type { RegisterOptions } from 'react-hook-form';
import { DropZoneProps } from '@/components/DropZone/DropZone.types';

export interface ControlledDropZoneProps extends DropZoneProps {
  name: string;
  rules?: RegisterOptions;
}
