import React from 'react';
import { AccountProvider } from './context/AccountContext';
import RoutesConfig from './routes/config';

const App: React.FC = () => {
  return (
    <AccountProvider>
      <RoutesConfig />
    </AccountProvider>
  );
};

export default App;