import React, { useCallback, useState } from 'react';
import { arrayOf, oneOfType, node } from 'prop-types';

import { Logo } from '../Logo';
import { Button } from '../Button';
import { ActionModal } from '../ActionModal';

import { SECOND_HEADER_LABELS } from './constants';

export const SecondHeader = ({ content }) => {
  const [isAddOpen, setAddOpen] = useState(false);

  const handleAddMovie = useCallback(() => {
    setAddOpen(true);
  }, [setAddOpen]);

  const handleCloseMovie = useCallback(() => {
    setAddOpen(false);
  }, [setAddOpen]);

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
