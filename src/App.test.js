import React from 'react';
import { render } from '@testing-library/react'

import App from './App';

describe('App', () => {
  it('should render provider', () => {
    const {getByText} = render(<App />);

    expect(getByText('Hello World, I\'m React Create Element')).not.toBe(null);
  });
});
