import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Trend from "./Trend";
import Opisanie from "./Opisanie";

const Stack = createNativeStackNavigator();

class Cinema extends React.Component{
  render() {
    return (
     <>
       <Stack.Navigator>
         <Stack.Screen options={{title: `OshCinema`}} name={`Trend`} component={Trend}/>
         <Stack.Screen name={`Opisanie`} component={Opisanie}/>
       </Stack.Navigator>
     </>
    )
  }
}
export default Cinema;
