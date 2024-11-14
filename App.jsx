import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './source/Navigation';
import {GlobalProvider} from './source/context/GlobalContext';

export default function App() {
  return (
      <GlobalProvider>
        <StatusBar />
        <Navigation />
      </GlobalProvider>
  );
}
