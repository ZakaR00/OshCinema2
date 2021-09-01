import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenGanrSerial from "./ScreenGanrSerial";
import ScreenGanrFilm from "./ScreenGanrFilm";
const Tab = createMaterialTopTabNavigator();


class MaterialBottom extends React.Component{

  render() {
    return (
      <>
        <Tab.Navigator>
          <Tab.Screen options={{title:`фильмы`}} name={`ScreenGanrFilm`} component={ScreenGanrFilm}/>
          <Tab.Screen options={{title:` серилы`}} name={`ScreenGanrSerial`} component={ScreenGanrSerial}/>
        </Tab.Navigator>
      </>
    )
  }
}
export default MaterialBottom;
