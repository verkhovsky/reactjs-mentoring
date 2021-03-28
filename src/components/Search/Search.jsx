import React from 'react';

import { Button } from '../Button';

import { SEARCH_LABELS } from './constants';

export const Search = () => (
    <div className="search--wrapper">
      <h2 className="search--label">{SEARCH_LABELS.label}</h2>
      <div className="search--content-wrapper">
        <input
          className="search--input"
          type="text"
          placeholder={SEARCH_LABELS.inputPlaceholder}
        />
        <Button className="search--button">{SEARCH_LABELS.search}</Button>
      </div>
    </div>
  );
