import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'config/routes';
import { store } from 'store';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider >
  );
};

export default App;
