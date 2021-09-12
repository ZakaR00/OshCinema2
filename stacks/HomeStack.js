import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name={`HomeScreen`} component={HomeScreen} />
      </Stack.Navigator>
    </>
  )
}
export default HomeStack;
