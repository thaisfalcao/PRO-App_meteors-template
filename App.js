import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocation';
import MeteorsScreen from './screens/Meteors';

export default function App() {
  return (
    <View style={styles.container}>
      <MeteorsScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
