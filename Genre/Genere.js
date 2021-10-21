import React from 'react';
import GenreSerialandGenreFilm from "./GenreSerialandGenreFilm"
import MoreDetails from "../Film and Serial/MoreDetails";
import ScreenGenre from "./ScreenGenre";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class  Genere extends React.Component {
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name={`GenreSerialandGenreFilm`} component={GenreSerialandGenreFilm} options={{title: `Жанры`}}/>
          <Stack.Screen name={`MoreDetails`} component={MoreDetails}/>
          <Stack.Screen name={`ScreenGenreFilm2`} component={ScreenGenre}/>
        </Stack.Navigator>
      </>
    );
  }
}
export default Genere;
