import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenSerial from "./ScreenSerial";
import MoreDetails from "./MoreDetails";

const Stack = createNativeStackNavigator();


class Serial extends React.Component {
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={`ScreenSerial`} component={ScreenSerial} options={{title: `Сериалы`}}/>
          <Stack.Screen name={`MoreDetails`} component={MoreDetails}/>
        </Stack.Navigator>
      </>
    );
  }
}
export default Serial;
