import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useLayoutEffect } from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';

import { View } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import CustomText from "../../components/StyledText";
import { DefaultColor } from "../../constants/Colors";

export default function ProfileScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ListItem bottomDivider>
                <Ionicons name="information-circle" size={24} color={DefaultColor.main} />
                <ListItem.Content>
                    <ListItem.Title>Contact Information</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem bottomDivider>
                <Ionicons name="image" size={24} color={DefaultColor.main} />
                <ListItem.Content>
                    <ListItem.Title>Change Profile Photo</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem bottomDivider>
                <Ionicons name="lock-closed" size={24} color={DefaultColor.main} />
                <ListItem.Content>
                    <ListItem.Title>Change Password</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem bottomDivider>
                <Ionicons name="warning" size={24} color={'red'} />
                <ListItem.Content>
                    <ListItem.Title>Request Account Deletion</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 0,
        width: '100%'
    },
});
