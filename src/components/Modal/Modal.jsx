import React, { useCallback } from 'react';
import { string, node, oneOfType, arrayOf, bool, func } from 'prop-types';
import { Modal } from 'react-bootstrap';
import classnames from 'classnames';
import { Formik, Form } from 'formik';

import { Button } from '../Button';

const ModalComponent = ({
  header,
  children,
  isOpen,
  onClose,
  primaryText,
  secondaryText,
  className,
  onClickSecondary,
  initialValues,
  onSubmit,
}) => {
  const handleOnHide = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Modal
      className={classnames('modal--wrapper', className)}
      show={isOpen}
      onHide={handleOnHide}
      keyboard={false}
      centered
      size="lg"
    >
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Modal.Header closeButton>{header}</Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            {!!secondaryText && (
              <Button
                className="modal--button-secondary"
                onClick={onClickSecondary}
              >
                {secondaryText}
              </Button>
            )}
            <Button className="modal--button-primary" type="submit">
              {primaryText}
            </Button>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  );
};

ModalComponent.propTypes = {
  isOpen: bool,
  onClose: func,
  onSubmit: func,
  onClickSecondary: func,
  children: oneOfType([arrayOf(node), node]),
  header: oneOfType([arrayOf(node), node]),
  primaryText: string,
  secondaryText: string,
  className: string,
};

ModalComponent.defaultProps = {
  isOpen: false,
  onClose: () => {},
  onSubmit: () => {},
  onClickSecondary: () => {},
  children: undefined,
  header: undefined,
  primaryText: 'Save',
  secondaryText: undefined,
  className: undefined,
};

export { ModalComponent as Modal };
