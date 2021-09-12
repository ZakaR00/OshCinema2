import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./screens/MainScreen";
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name={`MainScreen`}  component={MainScreen}/>
      </Stack.Navigator>
    </>
  )
}
export default MainStack;
