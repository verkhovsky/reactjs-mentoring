import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Button = ({ children, className }) => {
  return (
    <button className={classnames('button--wrapper', className)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: '',
};
