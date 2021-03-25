import React, { useCallback, useState } from 'react';

import { Logo } from '../Logo';
import { Button } from '../Button';

import { SECOND_HEADER_LABELS } from './constants';
import { ActionModal } from '../ActionModal';

export const SecondHeader = () => {
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
      <Button className="second-header--button" onClick={handleAddMovie}>
        {SECOND_HEADER_LABELS.addButton}
      </Button>
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
