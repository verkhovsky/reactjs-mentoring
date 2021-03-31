import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SORT_BY } from 'src/mocks/movies';
import { Select } from 'src/components/Select';
import { setSortBy } from 'src/models/actions/movies';
import { getSortBy } from 'src/models/selectors/movies';

import { SORT_BY_LABELS } from './constants';

export const SortBy = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(getSortBy);

  const currentValue = useMemo(
    () => SORT_BY.find(({ value }) => value === sortBy),
    [sortBy],
  );

  const handleOnChange = useCallback(
    ({ value }) => {
      dispatch(setSortBy(value));
    },
    [dispatch],
  );

  return (
    <div className="sort-by--wrapper">
      <span className="sort-by--label">{SORT_BY_LABELS.sortBy}</span>
      <Select
        options={SORT_BY}
        onChange={handleOnChange}
        value={currentValue}
      />
    </div>
  );
};
