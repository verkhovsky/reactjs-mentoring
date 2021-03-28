import React, { useCallback, useState } from 'react';
import classnames from 'classnames';

import { GENRES } from 'src/mocks/movies';

export const FilterGenres = () => {
  const [selectedGenre, setSelectedGenre] = useState(GENRES[0]);

  const handleOnGengeClick = useCallback(e => {
    const genre = e.target.id;

    if (genre) {
      setSelectedGenre(genre);
    }
  }, []);

  return (
    <div className="filter-genres--wrapper">
      <ul className="filter-genres--list" onClick={handleOnGengeClick}>
        {GENRES.map(value => (
          <li
            id={value}
            key={value}
            className={classnames('filter-genres--item', {
              'filter-genres--item-active': selectedGenre === value,
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
