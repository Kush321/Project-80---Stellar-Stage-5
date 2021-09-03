import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/homeScreen';
import Starmap from './screens/starmap';
import Spacecrafts from './screens/spacecrafts';
import Dailypic from './screens/dailypic';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StarMap" component={Starmap} />
        <Stack.Screen name="SpaceCrafts" component={Spacecrafts} />
        <Stack.Screen name="DailyPic" component={Dailypic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
