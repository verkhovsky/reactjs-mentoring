import React, { useCallback, useState } from 'react';

import { Logo } from '../Logo';
import { Button } from '../Button';

import { SECOND_HEADER_LABELS } from './constants';
import { AddModal } from './components';

export const SecondHeader = () => {
  const [isAddOpen, setAddOpen] = useState(true);

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
        <AddModal isOpen={isAddOpen} onClose={handleCloseMovie}></AddModal>
      )}
    </div>
  );
};
