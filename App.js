import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Home from "./stacks/Home"

const Tab = createMaterialBottomTabNavigator();

function App (){
    return (
      <PaperProvider>
          <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen options={{title: `Главная` , tabBarIcon: `home`}} name={ `Home`} component={Home}/>
              </Tab.Navigator>
          </NavigationContainer>
      </PaperProvider>
    )
}
export default App;
