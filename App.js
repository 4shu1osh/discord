import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';
import Routes from './src/routes';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </StoreProvider>
  );
}
