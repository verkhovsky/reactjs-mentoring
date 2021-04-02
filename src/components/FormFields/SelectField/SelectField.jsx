import React from 'react';
import { Field, useField } from 'formik';
import classnames from 'classnames';
import { string, bool } from 'prop-types';
import partial from 'lodash/partial';

import { Label } from '../../Label';
import { Select } from '../../Select';

export const SelectField = ({ id, label, className, required, ...props }) => {
  const [field, { error, touched }] = useField(props);

  return (
    <div className={classnames('select-field--wrapper', className)}>
      {!!label && <Label label={label} required={required} />}
      <Field
        id={id}
        name={field.name}
        component={({
          field: { value, name },
          form: { setFieldValue },
          ...rest
        }) => (
          <Select
            onChange={partial(setFieldValue, name)}
            value={value}
            {...rest}
          />
        )}
        {...props}
      />
      {error && touched && <span className="select-field--error">{error}</span>}
    </div>
  );
};

SelectField.propTypes = {
  id: string,
  placeholder: string,
  label: string,
  className: string,
  required: bool,
};

SelectField.defaultProps = {
  id: undefined,
  placeholder: undefined,
  label: undefined,
  className: undefined,
  required: false,
};
