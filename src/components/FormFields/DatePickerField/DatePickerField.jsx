import React from 'react';
import { Field, useField } from 'formik';
import classnames from 'classnames';
import { string, bool } from 'prop-types';
import partial from 'lodash/partial';

import { Label } from '../../Label';
import { DatePicker } from '../../DatePicker';

export const DatePickerField = ({
  id,
  placeholder,
  label,
  className,
  required,
  ...props
}) => {
  const [field, { error, touched }] = useField(props);

  return (
    <div className={classnames('datepicker-filed--wrapper', className)}>
      {!!label && <Label label={label} required={required} />}
      <Field
        id={id}
        name={field.name}
        placeholder={placeholder}
        component={({
          field: { value, name },
          form: { setFieldValue },
          ...rest
        }) => (
          <DatePicker
            value={value ? new Date(value) : value}
            onChange={partial(setFieldValue, name)}
            {...rest}
          />
        )}
        {...props}
      />
      {error && touched && (
        <span className="datepicker-filed--error">{error}</span>
      )}
    </div>
  );
};

DatePickerField.propTypes = {
  id: string,
  placeholder: string,
  label: string,
  className: string,
  required: bool,
};

DatePickerField.defaultProps = {
  id: undefined,
  placeholder: undefined,
  label: undefined,
  className: undefined,
  required: false,
};
