import React, { useCallback, useState, useEffect, useRef } from 'react';
import {
  arrayOf,
  number,
  oneOfType,
  string,
  func,
  instanceOf,
} from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { Button, Menu } from 'src/components';

export const Card = ({
  imageUrl,
  title,
  genre,
  releaseDate,
  id,
  onMenuSelect,
  menuOptions,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const handleActionClick = useCallback(() => {
    setMenuOpen(isOpen => !isOpen);
  }, []);

  const handleMenuItemSelect = useCallback(
    action => {
      onMenuSelect(id, action);
      setMenuOpen(false);
    },
    [onMenuSelect, id],
  );

  const handleOutsideClick = useCallback(e => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [isMenuOpen, handleOutsideClick]);

  return (
    <li className="movie-card--item">
      <img className="movie-card--image" src={imageUrl} alt="" />
      <div className="movie-card--description">
        <span className="movie-card--title">{title}</span>
        <span className="movie-card--release-date">
          {releaseDate.getFullYear()}
        </span>
      </div>
      <span className="movie-card--genre">{genre}</span>
      <Button className="movie-card--action-button" onClick={handleActionClick}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </Button>
      {isMenuOpen && (
        <Menu
          className="movie-card--menu"
          options={menuOptions}
          show={isMenuOpen}
          onSelect={handleMenuItemSelect}
          ref={menuRef}
        />
      )}
    </li>
  );
};

Card.propTypes = {
  id: oneOfType([string, number]).isRequired,
  imageUrl: string.isRequired,
  title: string.isRequired,
  genre: string.isRequired,
  releaseDate: instanceOf(Date).isRequired,
  onMenuSelect: func.isRequired,
  menuOptions: arrayOf(string),
};

Card.defaultProps = {
  menuOptions: [],
};
