import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Home from '../screens/Home';
import Plants from '../screens/Plants';
import Monitor from '../screens/Monitor';
import Feeling from '../screens/Feeling';


import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootTabParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group 
        screenOptions={{  
          headerShown: false,
          animation: 'slide_from_right', 
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Plants" component={Plants} />
        <Stack.Screen name="Monitor" component={Monitor} />
        <Stack.Screen name="Feeling" component={Feeling} />
      </Stack.Group>
    </Stack.Navigator>
  );
}