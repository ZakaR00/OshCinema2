import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Serials from "./Serials";
import Ser from "./Ser"

const Stack = createNativeStackNavigator();

class Film extends React.Component{
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen options={{title:`Сериалы`}} name={`Serials`} component={Serials}/>
          <Stack.Screen options={{title:`Серилы` }} name={`Ser`} component={Ser}/>
        </Stack.Navigator>
      </>
    )
  }
}
export default Film;
