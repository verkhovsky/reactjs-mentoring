import React from "react";

import { LOGO_LABES } from './contatants'

export const Logo = () => (
    <span className='logo--wrapper'>
      <span className='logo--bold'>{LOGO_LABES.netflix}</span>
      {LOGO_LABES.roulette}
    </span>
  );