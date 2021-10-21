import React from 'react';
import HomeTVandHomeCinemal from "../Film and Serial/HomeTVandHomeCinemal";
import MoreDetails from "../Film and Serial/MoreDetails";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class  House extends React.Component {
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={`HomeTVandHomeCinemal`} component={HomeTVandHomeCinemal} options={{title: `Главная`, }}/>
          <Stack.Screen name={`MoreDetails`} component={MoreDetails}/>
        </Stack.Navigator>
      </>
    );
  }
}

export default House;
