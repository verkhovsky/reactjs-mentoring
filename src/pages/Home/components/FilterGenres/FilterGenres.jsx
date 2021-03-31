import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import { FILTER_GENRES } from 'src/mocks/movies';
import { setFilterBy } from 'src/models/actions/movies';
import { getFilterBy } from 'src/models/selectors/movies';

export const FilterGenres = () => {
  const dispatch = useDispatch();
  const filterBy = useSelector(getFilterBy);

  const handleOnGengeClick = useCallback(
    e => {
      const genre = e.target.id;

      if (genre) {
        dispatch(setFilterBy(genre));
      }
    },
    [dispatch],
  );

  return (
    <div className="filter-genres--wrapper">
      <ul className="filter-genres--list" onClick={handleOnGengeClick}>
        {FILTER_GENRES.map(value => (
          <li
            id={value}
            key={value}
            className={classnames('filter-genres--item', {
              'filter-genres--item-active': filterBy === value,
            })}
            value={value}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
