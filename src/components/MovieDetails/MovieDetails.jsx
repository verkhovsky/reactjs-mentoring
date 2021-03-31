import React, { useCallback } from 'react';
import classnames from 'classnames';
import { number, oneOfType, string } from 'prop-types';

import { defaultImageURL } from 'src/mocks/movies';

export const MovieDetails = ({
  className,
  imageUrl,
  title,
  rating,
  releaseYear,
  genre,
  runtime,
  overview,
}) => {
  const handleImageError = useCallback(e => {
    e.target.src = defaultImageURL;
  }, []);

  return (
    <section className={classnames('movie-details--wrapper', className)}>
      <img
        className="movie-details--image"
        src={imageUrl}
        alt=""
        onError={handleImageError}
      />
      <div className="movie-details--content">
        <div className="movie-details--title-info">
          <span className="movie-details--title">{title}</span>
          <span className="movie-details--rating">{rating}</span>
        </div>
        <p className="movie-details--genre">{genre}</p>
        <div className="movie-details--info">
          <span>{releaseYear}</span>
          <span>{runtime} min</span>
        </div>
        <p className="movie-details--overview">{overview}</p>
      </div>
    </section>
  );
};

MovieDetails.propTypes = {
  imageUrl: string.isRequired,
  title: string.isRequired,
  genre: string.isRequired,
  rating: number.isRequired,
  releaseYear: oneOfType([string, number]).isRequired,
  runtime: number.isRequired,
  className: string,
  overview: string,
};

MovieDetails.defaultProps = {
  className: undefined,
  overview: undefined,
};
