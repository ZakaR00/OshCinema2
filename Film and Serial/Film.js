import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenFilm from "../Film and Serial/ScreenFilm";
import MoreDetails from "./MoreDetails";

const Stack = createNativeStackNavigator();


class FilmScreen extends React.Component {
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={`ScreenFilm`} component={ScreenFilm} options={{title: `Фильмы`}}/>
          <Stack.Screen name={`MoreDetails`} component={MoreDetails} options={{headerShown: false,}}/>
        </Stack.Navigator>
      </>
    );
  }
}
export default FilmScreen;
