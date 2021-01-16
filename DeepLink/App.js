import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Login from './src/Login';

const Stack = createStackNavigator();

// Inicio DeepLink //
const linking = {
  prefixes: [
    'deeplink://'
  ],
  config: {
    screens: {
      Login: 'login/:param'
    }
  },
};
// Fim DeepLink //

function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;