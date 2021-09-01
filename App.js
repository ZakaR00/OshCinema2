
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Cinema from "./Cinema"
import Film from "./Film";
import Serial from "./Serial";
import Bottom from "./Bottom";

const Tab = createMaterialBottomTabNavigator();

class App extends React.Component{
  render() {
    return (
      <PaperProvider>
          <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen options={{tabBarIcon: `home`, title:`Главная`}} name={`Cinema`} component={Cinema}/>
                <Tab.Screen options={{title:`Фильмы`, tabBarIcon: `movie`}} name={`Film`} component={Film}/>
                <Tab.Screen options={{title:`Сериалы`, tabBarIcon: `video`}} name={`Serial`} component={Serial}/>
                <Tab.Screen options={{title: `Жанры`, tabBarIcon: `format-list-bulleted`}} name={`Bottom`} component={Bottom}/>
              </Tab.Navigator>
          </NavigationContainer>
      </PaperProvider>
    )
  }
}
export default App;
