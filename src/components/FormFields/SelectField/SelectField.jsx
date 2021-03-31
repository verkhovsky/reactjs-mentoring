import React from 'react';
import { Field } from 'formik';
import classnames from 'classnames';
import { string } from 'prop-types';
import partial from 'lodash/partial';

import { Label } from '../../Label';
import { Select } from '../../Select';

export const SelectField = ({
  id,
  name,
  placeholder,
  label,
  className,
  ...props
}) => (
  <div className={classnames('select-field--wrapper', className)}>
    {!!label && <Label label={label} />}
    <Field
      id={id}
      name={name}
      placeholder={placeholder}
      component={({
        field: { value, name },
        form: { setFieldValue },
        ...rest
      }) => (
        <Select
          onChange={partial(setFieldValue, name)}
          value={value}
          name={name}
          {...rest}
        />
      )}
      {...props}
    />
  </div>
);

SelectField.propTypes = {
  name: string.isRequired,
  id: string,
  placeholder: string,
  label: string,
  className: string,
};

SelectField.defaultProps = {
  id: undefined,
  placeholder: undefined,
  label: undefined,
  className: undefined,
};
