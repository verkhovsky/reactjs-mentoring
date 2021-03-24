import React from 'react';
import { arrayOf, object } from 'prop-types';

import { getResultsText } from 'src/utils/utils';
import { Card } from '../Card';

export const MovieList = ({ movies }) => {
  return (
    <div className="movie-list--wrapper">
      <h2 className="movie-list--results-count">
        {!!movies.length && (
          <span className="movie-list--count">{movies.length}</span>
        )}{' '}
        {getResultsText(movies)}
      </h2>
      <ul className="movie-list--list">
        {movies.map(({ id, ...item }) => (
          <Card key={id} {...item} />
        ))}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: arrayOf(object),
};

MovieList.defaultProps = {
  movies: [],
};
