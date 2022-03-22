import * as React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthParamList } from '../../types';
import { HomeNavigator } from '../NativeStack';
import { DefaultColor } from "../../constants/Colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DrawerContent from "./DrawerContent";
import ProfileNavigator from "../Profile/ProfileNavigator";

const Drawer = createDrawerNavigator<AuthParamList>();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                headerShown: true,
                title: 'Home Screen',
                headerTitleAlign: 'center',
                headerTitleStyle: { color: DefaultColor.black, fontFamily: 'sans-regular' },
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Ionicons name={"menu"} color={DefaultColor.main} style={{ marginLeft: 15 }} size={27} />
                    </TouchableOpacity>
                ),
            })}
            drawerContent={(props) => <DrawerContent {...props} />}

        >
            <Drawer.Screen name="HomeDrawer" component={HomeNavigator}
                options={{
                    headerShown: false
                }}
            />
            <Drawer.Screen name="ProfileDrawer" component={ProfileNavigator}
                options={{
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    );
}