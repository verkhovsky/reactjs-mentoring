import React, { forwardRef } from 'react';
import { func, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export const DatePickerInput = forwardRef(
  ({ onClick, value, placeholderText }, ref) => {
    return (
      <div className="react-datepicker-input--wrapper" onClick={onClick}>
        <label ref={ref}>{value || placeholderText}</label>
        <FontAwesomeIcon icon={faCalendarAlt} />
      </div>
    );
  },
);

DatePickerInput.propTypes = {
  onClick: func,
  value: string,
  placeholderText: string,
};

DatePickerInput.defaultProps = {
  onClick: () => {},
  value: undefined,
  placeholderText: undefined,
};
