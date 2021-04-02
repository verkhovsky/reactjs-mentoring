import React from 'react';
import { Field, useField } from 'formik';
import classnames from 'classnames';
import { string, bool } from 'prop-types';

import { Label } from '../../Label';

export const InputField = ({
  id,
  placeholder,
  label,
  className,
  required,
  ...props
}) => {
  const [field, { error, touched }] = useField(props);

  return (
    <div className={classnames('input-field--wrapper', className)}>
      {!!label && <Label label={label} required={required} />}
      <Field placeholder={placeholder} id={id} {...field} {...props} />
      {error && touched && <span className="input-field--error">{error}</span>}
    </div>
  );
};

InputField.propTypes = {
  id: string,
  placeholder: string,
  label: string,
  className: string,
  required: bool,
};

InputField.defaultProps = {
  id: undefined,
  placeholder: undefined,
  label: undefined,
  className: undefined,
  required: false,
};
