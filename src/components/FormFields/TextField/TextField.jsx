import React from 'react';
import { Field } from 'formik';
import classnames from 'classnames';
import { bool, string } from 'prop-types';

import { Label } from '../../Label';

export const TextField = ({
  id,
  name,
  label,
  className,
  required,
  ...props
}) => (
  <div className={classnames('text-field--wrapper', className)}>
    {!!label && <Label label={label} required={required} />}
    <Field id={id} name={name} {...props}>
      {({ field: { value } }) => <span className="text-field">{value}</span>}
    </Field>
  </div>
);

TextField.propTypes = {
  name: string.isRequired,
  id: string,
  label: string,
  className: string,
  required: bool,
};

TextField.defaultProps = {
  id: undefined,
  placeholder: undefined,
  label: undefined,
  className: undefined,
  required: false,
};
