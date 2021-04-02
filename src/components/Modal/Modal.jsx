import React, { useCallback } from 'react';
import {
  string,
  node,
  oneOfType,
  arrayOf,
  bool,
  func,
  object,
  oneOf,
} from 'prop-types';
import { Modal } from 'react-bootstrap';
import classnames from 'classnames';
import { Formik, Form } from 'formik';
import partial from 'lodash/partial';

import { Button } from '../Button';

const ModalComponent = ({
  header,
  children,
  isOpen,
  onClose,
  size,
  primaryText,
  secondaryText,
  className,
  onClickSecondary,
  initialValues,
  onSubmit,
  validationSchema,
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
      size={size}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, ...form }) => (
          <Form>
            <Modal.Header closeButton>{header}</Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
              {!!secondaryText && (
                <Button
                  type="button"
                  className="modal--button-secondary"
                  onClick={partial(onClickSecondary, form)}
                >
                  {secondaryText}
                </Button>
              )}
              <Button
                className="modal--button-primary"
                type="submit"
                loading={isSubmitting}
              >
                {primaryText}
              </Button>
            </Modal.Footer>
          </Form>
        )}
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
  initialValues: object,
  validationSchema: object,
  size: oneOf(['sm', 'lg', 'xl']),
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
  initialValues: {},
  validationSchema: null,
  size: 'lg',
};

export { ModalComponent as Modal };
