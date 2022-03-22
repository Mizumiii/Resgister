import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileParamList } from '../../types';
import { ProfileScreen } from "../../screens/Profile";
import CustomText from "../../components/StyledText";
import { DefaultColor } from "../../constants/Colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator<ProfileParamList>();

export default function ProfileNavigator() {
    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => (
                {
                    headerTitleStyle: { fontSize: 20, fontFamily: 'sans-semibold', color: DefaultColor.dark },
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.toggleDrawer()}
                            style={{ flex: 0 }}
                        >
                            <Ionicons name={"menu"} color={DefaultColor.main} size={27} />
                        </TouchableOpacity>
                    ),
                }
            )}
        >
            <Stack.Screen
                name="ProfileList"
                component={ProfileScreen}
                options={{
                    title: 'Profile'
                }}
            />
        </Stack.Navigator>
    );
}