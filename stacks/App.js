import React from 'react';
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons";
import House from "./House"
import Film from "../Film and Serial/Film";
import Serial from "../Film and Serial/Serial";
import Genere from "../Genre/Genere";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();


class App extends React.Component {
  render() {
    return (
      <>
        <PaperProvider>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen  name={`Home`} component={House} options={{title: 'Главная', tabBarColor: '#56D2C4E0' , tabBarIcon:`home`, headerShown: false, backgroundColor: `blue`}}/>
              <Tab.Screen name={`Film`} component={Film} options={{title: 'Фильмы', tabBarIcon: 'movie', tabBarColor:  '#b65ec4',  headerShown: false}}/>
              <Tab.Screen name={`Serial`} component={Serial} options={{title: 'Сериалы', tabBarIcon:  'television', tabBarColor: '#be4289' , headerShown: false}}/>
              <Tab.Screen name={`Genere`} component={Genere} options={{title: 'Сериалы', tabBarColor: '#4CCEAFFF' , tabBarIcon:  'format-list-bulleted', headerShown: false}}/>
            </Tab.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </>
    );
  }
}
export default App;
