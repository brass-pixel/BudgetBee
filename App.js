import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Test from './screens/test';

const handleButtonPress = () => {
  console.log('test');
}

export default function App() {
  return <Test />;
}