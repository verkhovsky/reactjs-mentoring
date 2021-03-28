import React from 'react';
import { func, string, instanceOf } from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import classnames from 'classnames';

import { DatePickerInput } from './components';

export const DatePicker = ({
  className,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <ReactDatePicker
      wrapperClassName={classnames('date-picker--wrapper', className)}
      customInput={<DatePickerInput placeholderText={placeholder} />}
      onChange={onChange}
      selected={value}
      dateFormat="dd-MM-yyyy"
      {...props}
    />
  );
};

DatePicker.propTypes = {
  onChange: func.isRequired,
  value: instanceOf(Date),
  className: string,
  placeholder: string,
};

DatePicker.defaultProps = {
  className: undefined,
  placeholder: undefined,
};
