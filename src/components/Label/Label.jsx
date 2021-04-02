import React from 'react';
import classnames from 'classnames';
import { bool, string } from 'prop-types';

export const Label = ({ label, className, required }) => (
  <div className={classnames('label--wrapper', className)}>
    <label className="label--text">{label}</label>
    {required && <strong className="label--required">*</strong>}
  </div>
);

Label.propTypes = {
  label: string.isRequired,
  required: bool,
  className: string,
};

Label.defaultProps = {
  className: undefined,
  required: false,
};
