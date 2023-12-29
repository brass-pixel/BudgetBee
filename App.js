import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Test from './screens/Test';
import SignIn from './screens/SignIn';
import AppNavigator from './AppNavigator';

const handleButtonPress = () => {
  console.log('test');
}

const App = () => {
  return <AppNavigator />;
};

export default App;