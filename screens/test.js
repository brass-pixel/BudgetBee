// test.js
import React from 'react';
import { Text, View } from 'react-native';
import Button from '../components/Button';
import { styles } from '../styles';
import Hyperlink from '../components/Hyperlink';
import Input from '../components/Input';

const Test = () => {
  const handleButtonPress = () => {
    console.log('test');
  };

  return (
    <View style={styles.onboardContainer}>
      <View style={{ flexWrap: 'wrap' }}>
        {/* Test Rectangle */}
        <View
          style={{
            width: 280,
            height: 20,
            backgroundColor: '#BDBDBD', // Change this color to represent the rectangle
            marginVertical: 10,
          }}
        ></View>
        <Text style={styles.header}>Open up App.js to start working on your app! Test</Text>
        {/* Test Rectangle */}
        <View
          style={{
            width: 280,
            height: 20,
            backgroundColor: '#BDBDBD', // Change this color to represent the rectangle
            marginVertical: 10,
          }}
        ></View>
      </View>

      <Input label="Test Label" placeholder="Test Placeholder" />

      <View style={{ width: '100%', alignItems: 'flex-end', gap: 8 }}>
        <View style={styles.rowContainer}>
          <Button title="Primary" onPress={handleButtonPress} />
          <Button title="Secondary" onPress={handleButtonPress} />
        </View>

        <Hyperlink title="Test Link" page="link" />
      </View>
    </View>
  );
};

export default Test;
