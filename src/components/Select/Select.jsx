import React from 'react';
import { arrayOf, string, func, object, number, oneOfType } from 'prop-types';

import { Dropdown } from 'react-bootstrap';

export const Select = ({ onSelect, value, placeholder, options, name }) => {
  return (
    <Dropdown className="dropdown--wrapper" onSelect={onSelect} name={name}>
      <Dropdown.Toggle>{value || placeholder}</Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map(option => (
          <Dropdown.Item key={option} eventKey={option}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

Select.propTypes = {
  onSelect: func,
  value: string,
  placeholder: string,
  options: arrayOf(oneOfType([string, object, number])),
};

Select.defaultProps = {
  onSelect: () => {},
  value: undefined,
  placeholder: undefined,
  options: [],
};
