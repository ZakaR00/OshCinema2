import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ganr from "./Ganr"
import Ganres from "./Ganres";
import MaterialBottom from "./MaterialBottom";
const Stack = createNativeStackNavigator();

class Bottom extends React.Component{
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen options={{title:`Жанры`}} name={`Material`} component={MaterialBottom}/>
          <Stack.Screen name={`Ganr`} component={Ganr}/>
          <Stack.Screen name={`Ganres`} component={Ganres}/>
        </Stack.Navigator>
      </>
    )
  }
}
export default Bottom;
