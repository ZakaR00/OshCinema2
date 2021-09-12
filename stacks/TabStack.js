import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeStack from "./HomeStack";
import MainStack from "./MainStack";
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen options={{title:`по TV`}} name={`HomeStack`} component={HomeStack}/>
        <Tab.Screen options={{title:`в кинотеатрах`}} name={`MainStack`} component={MainStack}/>
      </Tab.Navigator>
    </>
  )
}

export default TabStack;
