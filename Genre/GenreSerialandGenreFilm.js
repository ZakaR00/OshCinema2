import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  ScreenGenreSerial from "./ScreenGenreSerial"
import ScreenGenreFilm from "./ScreenGenreFilm";

const Tab = createMaterialTopTabNavigator();
class  GenreSerialandGenreFilm extends React.Component {
  render() {
    return (
      <>
        <Tab.Navigator>
          <Tab.Screen name={`ScreenGenreSerial`} component={ScreenGenreSerial} options={{title: `Фильмы`}}/>
          <Tab.Screen name={`ScreenGenreFilm`} component={ScreenGenreFilm} options={{title: `Сериалы`}}/>
        </Tab.Navigator>
      </>
    );
  }
}
export default GenreSerialandGenreFilm;
