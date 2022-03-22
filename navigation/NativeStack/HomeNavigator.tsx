import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, WorkerScreen } from '../../screens/Home';
import { HomeParamList } from '../../types';
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DefaultColor } from "../../constants/Colors";

const Stack = createNativeStackNavigator<HomeParamList>();

export default function HomeNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ flex: 0 }}
                    >
                        <Ionicons name={"chevron-back"} color={DefaultColor.main} size={27} />
                    </TouchableOpacity>
                ),
                headerTitleStyle: { fontFamily: 'sans-semibold' },
                headerTitleAlign: 'center'
            })}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Worker" component={WorkerScreen} />
        </Stack.Navigator>
    );
}