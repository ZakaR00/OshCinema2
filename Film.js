import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Films from "./Films"
import Fil from "./Fil";

const Stack = createNativeStackNavigator();

class Film extends React.Component{
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen options={{title:`Фильмы`}} name={`Films`} component={Films}/>
          <Stack.Screen options={{title:`Фильмы`}} name={`Fil`} component={Fil}/>
        </Stack.Navigator>
      </>
    )
  }
}
export default Film;
