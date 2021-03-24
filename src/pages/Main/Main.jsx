import React from 'react';

import { Header, ErrorBoundary, Footer } from 'src/components';
import { Home } from '../Home';

export const Main = () => {
  return (
    <div className="main--wrapper">
      <Header />
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};
