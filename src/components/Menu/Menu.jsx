import React, { forwardRef, useCallback } from 'react';
import {
  arrayOf,
  func,
  oneOf,
  string,
  oneOfType,
  node,
  bool,
} from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import classnames from 'classnames';

export const Menu = forwardRef(
  ({ header, align, className, options, onSelect, show }, ref) => {
    const handleOnClick = useCallback(
      e => {
        const itemId = e.target.id;
        if (itemId) {
          onSelect(itemId);
        }
      },
      [onSelect],
    );

    return (
      <Dropdown.Menu
        ref={ref}
        className={classnames(
          'dropdown-menu--wrapper',
          `dropdown-menu--${align}`,
          className,
        )}
        show={show}
        align={align}
        onClick={handleOnClick}
      >
        {!!header && <Dropdown.Header>{header}</Dropdown.Header>}
        {options.map(option => (
          <Dropdown.Item key={option} id={option}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    );
  },
);

Menu.propTypes = {
  align: oneOf(['right', 'left']),
  options: arrayOf(string),
  onSelect: func,
  header: oneOfType([arrayOf(node), node]),
  show: bool,
};

Menu.defaultProps = {
  align: 'right',
  options: [],
  onSelect: () => {},
  header: null,
  show: false,
};
