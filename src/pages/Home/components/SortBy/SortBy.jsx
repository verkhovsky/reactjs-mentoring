import React from 'react';

import { SORT_BY } from 'src/mocks/movies';

import { SORT_BY_LABELS } from './constants';

export const SortBy = () => {
  return (
    <div className="sort-by--wrapper">
      <span className="sort-by--label">{SORT_BY_LABELS.sortBy}</span>
      <span className="sort-by--sort-label">{SORT_BY[0].value}</span>
      <ul className="sort-by--list">
        {SORT_BY.map(({ value, id }) => (
          <li key={id}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
