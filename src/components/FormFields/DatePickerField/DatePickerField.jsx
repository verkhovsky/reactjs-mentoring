import React from 'react';
import { Field } from 'formik';
import classnames from 'classnames';
import { string } from 'prop-types';
import partial from 'lodash/partial';

import { Label } from '../../Label';
import { DatePicker } from '../../DatePicker';

export const DatePickerField = ({
  id,
  name,
  placeholder,
  label,
  className,
  ...props
}) => {
  return (
    <div className={classnames('datepicker-filed--wrapper', className)}>
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
          <DatePicker
            value={value}
            onChange={partial(setFieldValue, name)}
            {...rest}
          />
        )}
        {...props}
      />
    </div>
  );
};

DatePickerField.propTypes = {
  name: string.isRequired,
  id: string,
  placeholder: string,
  label: string,
  className: string,
};

DatePickerField.defaultProps = {
  id: undefined,
  placeholder: undefined,
  label: undefined,
  className: undefined,
};
