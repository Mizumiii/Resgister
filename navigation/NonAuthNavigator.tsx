import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultColor } from '../constants/Colors';
import { ForgotPasswordScreen, LoginScreen, RegisterScreen } from '../screens/NonAuth';
import { NonAuthParamList } from '../types';


export default function NonAuthNavigator() {
    const Stack = createNativeStackNavigator<NonAuthParamList>();

    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
                headerTitleStyle: { fontFamily: 'sans-semibold', fontSize: 18, color: DefaultColor.main },
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    headerShown: true,
                    title: 'Sign up'
                }}
            />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
    )
}