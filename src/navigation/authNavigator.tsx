import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Locals
import {Login, Register} from '../containers';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
