import React from "react";

import { SecondHeader } from "../SecondHeader";
import { Search } from "../Search";


const Header = () => {
  return (
    <header className='header--wrapper'>
      <div className='header--content'>
        <SecondHeader />
        <Search />
      </div>
    </header>
  );
};

export default Header;