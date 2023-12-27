import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Test</Text>
      <Button/>
      <StatusBar style="auto" />
    </View>
  );
}

function Button() {
  return (
    <button>I'm a button</button>
  );
}

function Input() {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
