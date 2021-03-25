import React from 'react';
import {
  string,
  number,
  shape,
  bool,
  func,
  oneOfType,
  node,
  arrayOf,
} from 'prop-types';

import { Modal } from 'src/components';
import classnames from 'classnames';

export const DeleteModal = ({
  isOpen,
  onClose,
  initialValues,
  className,
  header,
  text,
}) => {
  return (
    <Modal
      className={classnames('delete-modal--wrapper', className)}
      isOpen={isOpen}
      onClose={onClose}
      header={header}
      initialValues={initialValues}
      primaryText="Confirm"
    >
      {text}
    </Modal>
  );
};

DeleteModal.propTypes = {
  initialValues: shape({
    id: oneOfType([string, number]),
  }),
  className: string,
  isOpen: bool,
  onClose: func,
  header: oneOfType([arrayOf(node), node]),
  text: string.isRequired,
};

DeleteModal.defaultProps = {
  className: undefined,
  initialValues: {},
  isOpen: false,
  onClose: () => {},
  header: null,
};
