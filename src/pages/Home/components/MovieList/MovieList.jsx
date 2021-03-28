import React, { useCallback, useState } from 'react';
import { arrayOf, object, func } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { getMoviesLoading } from 'src/models/selectors/movies';
import { editMovie, removeMovie } from 'src/models/actions/movies';
import { getResultsText } from 'src/utils/utils';
import { ActionModal, DeleteModal } from 'src/components';

import { Card } from '../Card';
import { MOVIE_LABELS } from '../../constants';

const MENU_OPTIONS = ['edit', 'delete'];

export const MovieList = ({ movies, onItemClick }) => {
  const [actionModal, setActionModal] = useState({});

  const dispatch = useDispatch();
  const isLoading = useSelector(getMoviesLoading);

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

  const handleEditMovie = useCallback(
    movie => {
      dispatch(editMovie(movie));
      //console.log(movie);
    },
    [dispatch],
  );

  const handleDeleteMovie = useCallback(
    ({ id }) => {
      dispatch(removeMovie(id));
    },
    [dispatch],
  );

  const renderActionModal = useCallback(() => {
    const { action, movie } = actionModal;

    const movieGenres = movie
      ? movie.genres.map(value => ({ label: value, value }))
      : [];

    switch (action) {
      case 'edit':
        return (
          <ActionModal
            isOpen
            onClose={handleActionModalClose}
            initialValues={{ ...movie, genres: movieGenres }}
            header={MOVIE_LABELS.editMovie}
            onSubmit={handleEditMovie}
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
            onSubmit={handleDeleteMovie}
          />
        );
      default:
        return null;
    }
  }, [actionModal, handleActionModalClose, handleEditMovie, handleDeleteMovie]);

  return (
    <div className="movie-list--wrapper">
      {isLoading ? (
        <Spinner animation="border" role="status" />
      ) : (
        <>
          <h2 className="movie-list--results-count">
            {!!movies.length && (
              <span className="movie-list--count">{movies.length}</span>
            )}{' '}
            {getResultsText(movies)}
          </h2>
          <ul className="movie-list--list">
            {movies.map(({ id, poster_path, title, release_date, genres }) => (
              <Card
                key={id}
                id={id}
                onMenuSelect={handleMenuSelect}
                onItemClick={onItemClick}
                menuOptions={MENU_OPTIONS}
                imageUrl={poster_path}
                title={title}
                genre={genres.join(', ')}
                releaseYear={new Date(release_date).getFullYear()}
              />
            ))}
          </ul>
          {renderActionModal()}
        </>
      )}
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
