import React, {
  useRef,
  useState,
  useEffect,
  FocusEvent,
  ChangeEvent,
} from 'react';

import clsx from 'clsx';

import { InputProps } from './Input.types';
import { Field } from '../Field';

const {
  Container,
  Wrapper,
  Error,
  OuterLabel,
  Adornment,
} = Field;

export const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    prefix,
    postfix,
    defaultValue = '',
    value: propsValue,
    inputRef,
    onFocus,
    onBlur,
    onChange,
    onKeyDown,
    onPressEnter,
    onClick,
    disabled,
    className = '',
    label,
    required,
    error,
    errorMsg = '',
    inputClassName = '',
    wrapperClassName = '',
    labelClassName = '',
    activateByValue,
    id,
    readOnly,
    inputCallbackRef,
    size = 'medium',
    ...htmlInputProps
  } = props;

  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const optionalRef = useRef<HTMLInputElement>(null);
  const baseInputRef = inputRef || optionalRef;
  const currentValue = propsValue as string ?? value;
  const hasPostfix = !!postfix;

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
    setFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
    setFocused(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange?.(event);
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onPressEnter?.(event);
    }
    onKeyDown?.(event);
  };

  useEffect(() => {
    inputCallbackRef?.(baseInputRef.current);
  }, [baseInputRef, inputCallbackRef]);

  return (
    <Container
      disabled={disabled}
      active={!!currentValue || focused}
      className={className}
      onClick={onClick}
      id={id}
    >
      {label && (
        <OuterLabel className={labelClassName}>
          {label}
          {required && (
            <span className="text-error ml-0.5">*</span>
          )}
        </OuterLabel>
      )}
      <Wrapper
        className={clsx(wrapperClassName, size === 'small' && '!rounded-[10px]')}
        ref={ref}
        focused={focused}
        error={error}
        onPointerUp={() => {
          baseInputRef.current?.focus();
        }}
      >
        {prefix && (
          <Adornment className="ml-[15px]">
            {prefix}
          </Adornment>
        )}
        <input
          id={id}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          autoComplete="off"
          onKeyDown={handleInputKeyDown}
          className={clsx(
            size === 'small' && 'pb-[7px] pt-[9px] px-[15px] rounded-[10px] text-text-2',
            size === 'medium' && 'py-[13px] md:py-[9px] md:rounded-s px-[12px]',
            size === 'large' && 'py-[21px] sm:py-[18px] px-[12px]',
            'w-full focus:outline-none bg-transparent border-0 text-beige',
            'autofill-text-beige text-ellipsis text-text-7 rounded-md',
            'caret-beige disabled:cursor-not-allowed',
            'placeholder:text-beige/50',
            inputClassName,
            prefix && 'pl-1.5',
          )}
          value={currentValue}
          ref={baseInputRef}
          disabled={disabled}
          readOnly={readOnly}
          {...htmlInputProps}
        />
        {hasPostfix && (
          <Adornment className={clsx(
            'mr-[15px]',
            size === 'small' && '!mt-2',
            size === 'medium' && 'md:!mt-[9px]',
          )}
          >
            {postfix}
          </Adornment>
        )}
      </Wrapper>
      {
        errorMsg && (
          <Error>
            {errorMsg}
          </Error>
        )
      }
    </Container>
  );
});
