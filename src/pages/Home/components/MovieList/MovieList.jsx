import React, { useCallback, useState } from 'react';
import { arrayOf, object, func } from 'prop-types';

import { getResultsText } from 'src/utils/utils';
import { ActionModal, DeleteModal } from 'src/components';

import { Card } from '../Card';
import { MOVIE_LABELS } from '../../constants';

const MENU_OPTIONS = ['edit', 'delete'];

export const MovieList = ({ movies, onItemClick }) => {
  const [actionModal, setActionModal] = useState({});

  const handleMenuSelect = useCallback(
    (movieId, action) => {
      const menuSelectedMovie = movies.find(movie => movie.id === movieId);

      if (menuSelectedMovie) {
        setActionModal({
          movie: menuSelectedMovie,
          action,
        });
      }
    },
    [movies],
  );

  const handleActionModalClose = useCallback(() => {
    setActionModal({});
  }, []);

  const renderActionModal = useCallback(() => {
    const { action, movie } = actionModal;

    switch (action) {
      case 'edit':
        return (
          <ActionModal
            isOpen
            onClose={handleActionModalClose}
            initialValues={movie}
            header={MOVIE_LABELS.editMovie}
          />
        );
      case 'delete':
        return (
          <DeleteModal
            isOpen
            onClose={handleActionModalClose}
            initialValues={movie}
            header={MOVIE_LABELS.deleteMovie}
            text={MOVIE_LABELS.deleteText}
          />
        );
      default:
        return null;
    }
  }, [actionModal, handleActionModalClose]);

  return (
    <div className="movie-list--wrapper">
      <h2 className="movie-list--results-count">
        {!!movies.length && (
          <span className="movie-list--count">{movies.length}</span>
        )}{' '}
        {getResultsText(movies)}
      </h2>
      <ul className="movie-list--list">
        {movies.map(({ id, releaseDate, ...item }) => (
          <Card
            key={id}
            id={id}
            onMenuSelect={handleMenuSelect}
            onItemClick={onItemClick}
            menuOptions={MENU_OPTIONS}
            releaseYear={releaseDate.getFullYear()}
            {...item}
          />
        ))}
      </ul>
      {renderActionModal()}
    </div>
  );
};

MovieList.propTypes = {
  movies: arrayOf(object),
  onItemClick: func.isRequired,
};

MovieList.defaultProps = {
  movies: [],
};
