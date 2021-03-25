import React from 'react';

import { SecondHeader } from '../SecondHeader';
import { Search } from '../Search';

export const Header = () => {
  return (
    <header className="header--wrapper">
      <div className="header--overlay">
        <div className="header--content">
          <SecondHeader />
          <Search />
        </div>
      </div>
    </header>
  );
};
