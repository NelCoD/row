/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  createContext,
  forwardRef,
  HTMLAttributes,
  useMemo,
  useContext,
  ButtonHTMLAttributes,
} from 'react';

import clsx from 'clsx';

import { BaseButton } from '../Button';
import {
  FieldWrapperProps,
  IFieldCtx,
  FieldContainerProps,
} from './Field.types';

const FieldCtx = createContext<IFieldCtx>({});

export class Field {
  static Container = (props: FieldContainerProps) => {
    const {
      id,
      disabled,
      className,
      active,
      ...htmlDivProps
    } = props;

    const ctxValue: IFieldCtx = useMemo(() => ({
      id,
      disabled,
      active,
    }), [id, disabled, active]);

    return (
      <FieldCtx.Provider value={ctxValue}>
        <div className={clsx(className, 'group')} {...htmlDivProps} />
      </FieldCtx.Provider>
    );
  };

  static Wrapper = forwardRef<HTMLDivElement, FieldWrapperProps>((props, ref) => {
    const {
      children,
      className,
      focused,
      error,
      ...htmlDivProps
    } = props;
    const { disabled, active } = useContext(FieldCtx);
    return (
      <div
        className={clsx(
          className,
          'relative rounded-md flex items-center border duration-200 transition-colors',
          focused ? 'border-beige ring-1 ring-beige' : 'border-beige/50',
          disabled ? 'opacity-50' : 'group-hover:border-beige',
          error && '!border-error ring-1 ring-error',
          active && '!border-beige',
        )}
        ref={ref}
        {...htmlDivProps}
      >
        {children}
      </div>
    );
  });

  static OuterLabel = (props: HTMLAttributes<HTMLLabelElement>) => {
    const { className, ...htmlLabelProps } = props;
    const { id, active } = useContext(FieldCtx);

    return (
      <label
        id={id}
        className={clsx(
          className,
          active ? 'text-beige' : 'text-beige/50 group-hover:text-beige',
          'text-text-2 mb-1 block duration-200',
        )}
        {...htmlLabelProps}
      />
    );
  };

  static Adornment = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, onPointerUp, ...htmlDivProps } = props;
    const {
      disabled,
      active,
    } = useContext(FieldCtx);

    return (
      <div
        className={clsx(
          className,
          'inline-grid mt-3 grid-flow-col gap-x-1 items-center self-start',
          'text-beige/50',
          disabled ? 'pointer-events-none' : 'group-hover:text-beige',
          active && '!text-beige',
        )}
        {...htmlDivProps}
      />
    );
  };

  static AdornmentButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className = '', ...htmlButtonProps } = props;

    return (
      <BaseButton
        className={`${className} focus:text-beige duration-200 active:scale-95`}
        {...htmlButtonProps}
      />
    );
  };

  static Error = (props: HTMLAttributes<HTMLSpanElement>) => {
    const { className = '', ...htmlSpanProps } = props;

    return (
      <span
        className={`${className} text-error text-text-9 block mt-1`}
        {...htmlSpanProps}
      />
    );
  };
}
