import React from 'react';
import ReactDatePicker from 'react-datepicker';
import classnames from 'classnames';
import { string } from 'prop-types';

export const DatePicker = ({ type, className, ...props }) => {
  return (
    <ReactDatePicker
      wrapperClassName={classnames('date-picker--wrapper', className)}
      type={type}
      {...props}
    />
  );
};

DatePicker.propTypes = {
  type: string,
  className: string,
};

DatePicker.defaultProps = {
  type: 'calendar',
  className: undefined,
};
