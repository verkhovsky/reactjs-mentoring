import React, { useCallback } from 'react';
import {
  string,
  shape,
  bool,
  func,
  oneOfType,
  node,
  arrayOf,
  number,
  object,
} from 'prop-types';
import classnames from 'classnames';

import { GENRES } from 'src/mocks/movies';
import { Modal } from 'src/components';
import {
  InputField,
  SelectField,
  DatePickerField,
  TextField,
} from 'src/components/FormFields';

import { ActionModalSchema } from './validation';

export const ActionModal = ({
  isOpen,
  onClose,
  initialValues,
  className,
  header,
  onSubmit,
}) => {
  const onResetClick = useCallback(({ resetForm }) => {
    resetForm();
  }, []);

  return (
    <Modal
      className={classnames('action-modal--wrapper', className)}
      isOpen={isOpen}
      onClose={onClose}
      header={header}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ActionModalSchema}
      onClickSecondary={onResetClick}
      secondaryText="Reset"
      primaryText="Submit"
    >
      {initialValues.id && <TextField name="id" label="Movie id" />}
      <InputField name="title" placeholder="Title" label="Title" required />
      <DatePickerField
        name="release_date"
        placeholder="Select Date"
        label="Release date"
      />
      <InputField
        name="poster_path"
        placeholder="Movie URL here"
        label="Movie url"
        required
      />
      <SelectField
        name="genres"
        placeholder="Select genres"
        label="Genres"
        options={GENRES}
        isMulti
        required
      />
      <InputField
        name="overview"
        placeholder="Overview here"
        label="Overview"
        required
      />
      <InputField
        name="runtime"
        placeholder="Runtime here"
        label="Runtime"
        type="number"
        required
      />
    </Modal>
  );
};

ActionModal.propTypes = {
  initialValues: shape({
    title: string,
    poster_path: string,
    overview: string,
    runtime: number,
    release_date: string,
    genres: arrayOf(object),
  }),
  className: string,
  isOpen: bool,
  onClose: func,
  header: oneOfType([arrayOf(node), node]),
  onSubmit: func,
};

ActionModal.defaultProps = {
  className: undefined,
  initialValues: {
    id: '',
    title: '',
    poster_path: '',
    overview: '',
    runtime: 0,
    release_date: undefined,
    genres: [],
  },
  isOpen: false,
  onClose: () => {},
  header: null,
  onSubmit: () => {},
};
