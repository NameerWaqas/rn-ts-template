import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Locals
import {Home} from '../containers';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
