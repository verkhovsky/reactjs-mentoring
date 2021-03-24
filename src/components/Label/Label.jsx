import React from 'react';
import classnames from 'classnames';
import { string } from 'prop-types';

export const Label = ({ label, className }) => {
  return (
    <label className={classnames('label--wrapper', className)}>{label}</label>
  );
};

Label.propTypes = {
  label: string.isRequired,
  className: string,
};

Label.defaultProps = {
  className: undefined,
};
