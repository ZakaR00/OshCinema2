import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabStack from "./TabStack";

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={{title: `OshCinema`}} name={`TabStack`} component={TabStack} />
      </Stack.Navigator>
    </>
  )
}
export default Home;
