import React from 'react';
import { Field } from 'formik';
import classnames from 'classnames';
import { string } from 'prop-types';

import { Label } from '../../Label';
import { Select } from '../../Select';

export const SelectField = ({
  id,
  name,
  placeholder,
  label,
  className,
  ...props
}) => {
  return (
    <div className={classnames('select-field--wrapper', className)}>
      {!!label && <Label label={label} />}
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        component={Select}
        {...props}
      />
    </div>
  );
};

SelectField.propTypes = {
  name: string.isRequired,
  id: string,
  placeholder: string,
  label: string,
  className: string,
};

SelectField.defaultProps = {};
