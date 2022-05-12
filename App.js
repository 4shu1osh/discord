import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
// import { Provider as StoreProvider } from 'react-redux';
import Routes from './src/routes';
import { Text } from 'react-native';

export default function App() {
  return (
  
    // <StoreProvider store={store}>
      <PaperProvider>
      <Routes />
    </PaperProvider>
    // </StoreProvider>
  );
}
