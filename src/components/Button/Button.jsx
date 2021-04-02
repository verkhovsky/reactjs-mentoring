import React from 'react';
import { node, string, func, arrayOf, oneOfType, bool } from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export const Button = ({
  children,
  className,
  onClick,
  loading,
  disabled,
  ...props
}) => (
  <button
    className={classnames('button--wrapper', className)}
    onClick={onClick}
    disabled={disabled || loading}
    {...props}
  >
    {loading ? (
      <FontAwesomeIcon className="button--loading" icon={faCircleNotch} />
    ) : (
      children
    )}
  </button>
);

Button.propTypes = {
  onClick: func,
  loading: bool,
  disabled: bool,
  children: oneOfType([arrayOf(node), node]),
  className: string,
};

Button.defaultProps = {
  onClick: () => {},
  loading: false,
  disabled: false,
  children: null,
  className: '',
};
