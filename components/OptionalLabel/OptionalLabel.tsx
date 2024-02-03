/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { OptionalLabelProps } from './OptionalLabel.types';

export const OptionalLabel = (props: OptionalLabelProps) => {
  const {
    pass,
    children,
    label,
    disabled,
    className = '',
    ...htmlLabelProps
  } = props;

  if (pass) {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {children}
      </>
    );
  }

  return (
    <label
      className={`
        ${className}
        grid grid-cols-[auto_auto] items-start gap-3 group
        font-normal text-text-2 cursor-[inherit] duration-200
      `}
      {...htmlLabelProps}
    >
      {children}
      <span>
        {label}
      </span>
    </label>
  );
};
