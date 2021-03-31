import React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';

import { SecondHeader } from '../SecondHeader';
import { Search } from '../Search';

export const Header = ({ headerContent, secondHeaderContent }) => (
    <header className="header--wrapper">
      <div className="header--overlay">
        <div className="header--content">
          <SecondHeader content={secondHeaderContent} />
          {headerContent || <Search />}
        </div>
      </div>
    </header>
  );

Header.propTypes = {
  headerContent: oneOfType([arrayOf(node), node]),
  secondHeaderContent: oneOfType([arrayOf(node), node]),
};

Header.defaultProps = {
  headerContent: null,
  secondHeaderContent: null,
};
