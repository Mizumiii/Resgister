import * as React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
    Linking,
} from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { drawerData } from './DrawerItem';
import {
    Ionicons, MaterialCommunityIcons,
} from '@expo/vector-icons';
import { DefaultColor } from '../../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import { Drawer, Title, Caption } from 'react-native-paper';
import { useContext } from 'react';
import { Avatar } from 'react-native-elements';

const DrawerContent = (props: any) => {
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);
    const navigation = props.navigation;
    const [alertPresent, setAlertPresent] = React.useState<boolean>(false);


    const handleLogout = async () => {
        Alert.alert("Services", "Are you sure you want to logout?",
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => { }
                },
                {
                    text: 'Ok',
                    style: 'destructive',
                    onPress: () => handleProceedLogout()
                },
            ]
        )
    };

    const handleProceedLogout = async () => {
        await AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'user']).finally(() => {
            navigation.dispatch(StackActions.replace('NonAuth'));
        });
    }

    const handleHelpUrl = async () => {
        // await Linking.openURL('http:/m.me/MedMoverPh/');
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[styles.userInfoSection, {
                    backgroundColor: props.state.index === props.state.routes.findIndex(e => e.name === 'ProfileDrawer') ? DefaultColor.main : DefaultColor.secondary
                }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileDrawer')}>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                            <Ionicons
                                name={"person-circle"}
                                size={55}
                                style={{ alignSelf: 'center' }}
                                color={DefaultColor.white}
                            />

                            <View style={{ flex: 0, width: '60%', marginLeft: 15, justifyContent: 'center' }}>
                                <Title
                                    style={[styles.title, { color: DefaultColor.white }]}
                                    numberOfLines={1}
                                >Juan Dela Cruz</Title>
                                <Caption style={[styles.caption, { color: DefaultColor.white }]}>View Profile</Caption>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    {drawerData.map((data) => (
                        <View key={data.name}>
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <MaterialCommunityIcons
                                        name={data.icon}
                                        color={props.state.index === props.state.routes.findIndex(e => e.name === data.screen) ? DefaultColor.white : DefaultColor.main}
                                        size={data.icon === 'bike-fast' ? 27 : 30}
                                    />
                                )}
                                label={data.name}
                                onPress={() => {
                                    if (data.name === 'Help') {
                                        handleHelpUrl();
                                    } else {
                                        navigation.navigate(data.screen)
                                    }
                                }}
                                labelStyle={{ marginLeft: data.icon === 'bike-fast' ? 3 : 0, fontFamily: 'sans-regular', fontSize: 14, color: props.state.index === props.state.routes.findIndex(e => e.name === data.screen) ? DefaultColor.white : DefaultColor.black }}
                                focused={props.state.index === props.state.routes.findIndex(e => e.name === data.screen)}
                                activeBackgroundColor={props.state.index === props.state.routes.findIndex(e => e.name === data.screen) ? DefaultColor.secondary : undefined}
                            />
                        </View>
                    ))}
                </Drawer.Section>
            </ScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Ionicons
                            name="log-out"
                            color={DefaultColor.main}
                            size={30}
                        />
                    )}
                    label="Log Out"
                    onPress={handleLogout}
                    labelStyle={{ fontFamily: 'sans-regular', fontSize: 14, color: DefaultColor.black }}
                />
            </Drawer.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerSection: {
        marginTop: 15,
        backgroundColor: DefaultColor.white
    },
    userInfoSection: {
        flex: 0,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: DefaultColor.secondary
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    topDrawerSection: {
        flex: 1,
        backgroundColor: DefaultColor.secondary
    }
});

export default DrawerContent;