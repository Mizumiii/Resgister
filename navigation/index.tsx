/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, Pressable } from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import DrawerNavigator from './Drawer/DrawerNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import NonAuthNavigator from './NonAuthNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='NonAuth'
    >
      {/* <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} /> */}
      <Stack.Screen name="NonAuth" component={NonAuthNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Auth" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen}
          options={{ title: 'Privacy Policy' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

