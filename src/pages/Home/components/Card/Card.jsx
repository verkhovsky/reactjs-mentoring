import React from 'react';
import { arrayOf, number, string } from 'prop-types';

import { Button } from 'src/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export const Card = ({ url, title, genres, releaseDate }) => {
  return (
    <li className="movie-card--item">
      <img className="movie-card--image" src={url} alt="" />
      <div className="movie-card--description">
        <span className="movie-card--title">{title}</span>
        <span className="movie-card--release-date">{releaseDate}</span>
      </div>
      <span className="movie-card--genre">{genres.join(', ')}</span>
      <Button className="movie-card--action-button">
        <FontAwesomeIcon icon={faEllipsisV} />
      </Button>
    </li>
  );
};

Card.propTypes = {
  url: string.isRequired,
  title: string.isRequired,
  genres: arrayOf(string).isRequired,
  releaseDate: number.isRequired,
};
