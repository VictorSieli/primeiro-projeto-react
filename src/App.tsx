import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
