import React from 'react';
import { Field } from 'formik';
import classnames from 'classnames';
import { string } from 'prop-types';

import { Label } from '../../Label';

export const InputField = ({
  id,
  name,
  placeholder,
  label,
  className,
  ...props
}) => (
    <div className={classnames('input-field--wrapper', className)}>
      {!!label && <Label label={label} />}
      <Field id={id} name={name} placeholder={placeholder} {...props} />
    </div>
  );

InputField.propTypes = {
  name: string.isRequired,
  id: string,
  placeholder: string,
  label: string,
  className: string,
};

InputField.defaultProps = {
  id: undefined,
  placeholder: undefined,
  label: undefined,
  className: undefined,
};
