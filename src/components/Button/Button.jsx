import React from 'react';
import { node, string, func, arrayOf, oneOfType } from 'prop-types';
import classnames from 'classnames';

export const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={classnames('button--wrapper', className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: func,
  children: oneOfType([arrayOf(node), node]),
  className: string,
};

Button.defaultProps = {
  onClick: () => {},
  children: null,
  className: '',
};
