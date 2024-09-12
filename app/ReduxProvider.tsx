import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/redux/store';

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
