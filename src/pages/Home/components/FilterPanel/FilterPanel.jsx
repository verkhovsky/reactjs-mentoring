import React from 'react';

import { FilterGenres } from '../FilterGenres';
import { SortBy } from '../SortBy';

export const FilterPanel = () => (
  <div className="filter-panel--wrapper">
    <FilterGenres />
    <SortBy />
  </div>
);
