import React, { useCallback, useMemo, useState } from 'react';

import { GENRES } from 'src/mocks/movies';

import { Modal, DatePicker } from 'src/components';
import { InputField, SelectField } from 'src/components/FormFields';

export const AddModal = ({ isOpen, onClose }) => {
  const [selectValue, setSelectValue] = useState(null);
  const initialValues = useMemo(
    () => ({
      title: '',
      url: '',
      overview: '',
      runtime: '',
    }),
    [],
  );

  const handleOnSelect = useCallback(
    value => {
      setSelectValue(value);
    },
    [setSelectValue],
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      initialValues={initialValues}
      className="add-modal--wrapper"
    >
      <InputField name="title" placeholder="Title" label="Title" />
      <DatePicker />
      <InputField name="url" placeholder="Movie URL here" label="Movie url" />
      <SelectField
        name="genre"
        placeholder="Select genre"
        label="Genre"
        options={GENRES}
        onSelect={handleOnSelect}
        value={selectValue}
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
