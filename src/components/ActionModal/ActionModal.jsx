import React from 'react';
import {
  string,
  instanceOf,
  shape,
  bool,
  func,
  oneOfType,
  node,
  arrayOf,
  number,
  oneOf,
} from 'prop-types';

import { GENRES } from 'src/mocks/movies';
import { Modal } from 'src/components';
import {
  InputField,
  SelectField,
  DatePickerField,
} from 'src/components/FormFields';
import classnames from 'classnames';

export const ActionModal = ({
  isOpen,
  onClose,
  initialValues,
  className,
  header,
}) => {
  return (
    <Modal
      className={classnames('action-modal--wrapper', className)}
      isOpen={isOpen}
      onClose={onClose}
      header={header}
      initialValues={initialValues}
      secondaryText="Reset"
      primaryText="Submit"
    >
      <InputField name="title" placeholder="Title" label="Title" />
      <DatePickerField
        name="releaseDate"
        placeholder="Select Date"
        label="Release date"
      />
      <InputField name="url" placeholder="Movie URL here" label="Movie url" />
      <SelectField
        name="genre"
        placeholder="Select genre"
        label="Genre"
        options={GENRES}
      />
      <InputField
        name="overview"
        placeholder="Overview here"
        label="Overview"
      />
      <InputField name="runtime" placeholder="Runtime here" label="Runtime" />
    </Modal>
  );
};

ActionModal.propTypes = {
  initialValues: shape({
    title: string,
    url: string,
    overview: string,
    runtime: number,
    releaseDate: instanceOf(Date),
    genre: oneOf(GENRES),
  }),
  className: string,
  isOpen: bool,
  onClose: func,
  header: oneOfType([arrayOf(node), node]),
};

ActionModal.defaultProps = {
  className: undefined,
  initialValues: {},
  isOpen: false,
  onClose: () => {},
  header: null,
};
