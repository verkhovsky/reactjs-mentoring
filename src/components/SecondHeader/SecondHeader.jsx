import React, { useCallback, useState } from 'react';
import { arrayOf, oneOfType, node } from 'prop-types';
import { useDispatch } from 'react-redux';

import { addMovie } from 'src/models/actions/movies';

import { Logo } from '../Logo';
import { Button } from '../Button';
import { ActionModal } from '../ActionModal';

import { SECOND_HEADER_LABELS } from './constants';

export const SecondHeader = ({ content }) => {
  const [isAddOpen, setAddOpen] = useState(false);

  const dispatch = useDispatch();

  const handleAddMovie = useCallback(() => {
    setAddOpen(true);
  }, [setAddOpen]);

  const handleCloseMovie = useCallback(() => {
    setAddOpen(false);
  }, [setAddOpen]);

  const handleCreateMovie = useCallback(
    async movie => {
      const { id, ...restMovie } = movie;

      await dispatch(addMovie(restMovie, id));

      handleCloseMovie();
    },
    [dispatch, handleCloseMovie],
  );

  return (
    <div className="second-header--wrapper">
      <Logo />
      {content || (
        <Button className="second-header--button" onClick={handleAddMovie}>
          {SECOND_HEADER_LABELS.addButton}
        </Button>
      )}
      {isAddOpen && (
        <ActionModal
          isOpen={isAddOpen}
          onClose={handleCloseMovie}
          header={SECOND_HEADER_LABELS.addMovie}
          onSubmit={handleCreateMovie}
        />
      )}
    </div>
  );
};

SecondHeader.propTypes = {
  content: oneOfType([arrayOf(node), node]),
};

SecondHeader.defaultProps = {
  content: null,
};
