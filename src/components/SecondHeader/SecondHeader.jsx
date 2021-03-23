import React from 'react';

import { Logo } from '../Logo';
import { Button } from '../Button';

import { SECOND_HEADER_LABELS } from './constants';

export const SecondHeader = () => {
  return (
    <div className="second-header--wrapper">
      <Logo />
      <Button className="second-header--button">
        {SECOND_HEADER_LABELS.addButton}
      </Button>
    </div>
  );
};
