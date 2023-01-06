import React from 'react';

import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import FormApp from './src/components/FormApp';
import DrawerNav from './src/drawerNav/DrawerNav';
const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen component={FormApp} name="FormApp" />
            <Stack.Screen component={DrawerNav} name="Drawer" />
        </Stack.Navigator>
    );
}

export default function App(){
  return(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}







