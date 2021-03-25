import React, { useCallback, useState, useRef } from 'react';
import { arrayOf, number, oneOfType, string, func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { Button, Menu } from 'src/components';
import { useClickOutside } from 'src/hooks/useClickOutside';

export const Card = ({
  imageUrl,
  title,
  genre,
  releaseYear,
  id,
  onMenuSelect,
  menuOptions,
  onItemClick,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const ref = useRef(null);
  const menuRef = useRef(null);

  const handleActionClick = useCallback(() => {
    setMenuOpen(isOpen => !isOpen);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleMenuItemSelect = useCallback(
    action => {
      onMenuSelect(id, action);
      handleMenuClose();
    },
    [onMenuSelect, id, handleMenuClose],
  );

  const handleImageClick = useCallback(() => {
    onItemClick(id);
  }, [id, onItemClick]);

  useClickOutside(ref.current, handleMenuClose);

  return (
    <li className="movie-card--item">
      <img
        className="movie-card--image"
        src={imageUrl}
        alt=""
        onClick={handleImageClick}
      />
      <div className="movie-card--description">
        <span className="movie-card--title">{title}</span>
        <span className="movie-card--release-date">{releaseYear}</span>
      </div>
      <span className="movie-card--genre">{genre}</span>
      <div ref={ref} className="movie-card--menu-wrapper">
        <Button
          className="movie-card--action-button"
          onClick={handleActionClick}
        >
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
      </div>
    </li>
  );
};

Card.propTypes = {
  id: oneOfType([string, number]).isRequired,
  imageUrl: string.isRequired,
  title: string.isRequired,
  genre: string.isRequired,
  releaseYear: number.isRequired,
  onMenuSelect: func.isRequired,
  onItemClick: func.isRequired,
  menuOptions: arrayOf(string),
};

Card.defaultProps = {
  menuOptions: [],
};
