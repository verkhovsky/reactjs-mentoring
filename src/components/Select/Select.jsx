import React from 'react';
import { arrayOf, string, func, object, oneOfType, bool } from 'prop-types';
import ReactSelect from 'react-select';

export const Select = ({ onChange, value, placeholder, options, isMulti }) => (
  <ReactSelect
    classNamePrefix="dropdown"
    className="dropdown--wrapper"
    options={options}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    isMulti={isMulti}
  />
);

Select.propTypes = {
  onChange: func,
  value: oneOfType([object, arrayOf(object)]),
  placeholder: string,
  isMulti: bool,
  options: arrayOf(oneOfType([object])),
};

Select.defaultProps = {
  onChange: () => {},
  value: undefined,
  placeholder: undefined,
  isMulti: false,
  options: [],
};
