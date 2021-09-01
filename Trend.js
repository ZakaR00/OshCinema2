import React from 'react';
import Tvas from "./Tvas"
import Telas from "./Telas"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

class Trend extends React.Component{

  render() {
    return (
      <>
        <Tab.Navigator>
          <Tab.Screen options={{title:`ПО TV`}} name={`Tvas`} component={Tvas}/>
          <Tab.Screen options={{title:`В кинотеатрах`}} name={`Telas`} component={Telas}/>
        </Tab.Navigator>
      </>
    )
  }
}
export default Trend;
