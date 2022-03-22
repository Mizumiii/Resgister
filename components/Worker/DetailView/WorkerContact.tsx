import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Linking } from 'react-native';

import { View } from 'react-native';
import CustomText from "../../../components/StyledText";
import { DefaultColor } from "../../../constants/Colors";
import { Worker } from "../../../models/Worker";
import ButtonComponent from "../../Button/ButtonComponent";

interface IProps {
    contactNumber: string;
}

export default function WorkerContact(props: IProps) {

    const contactNumber = props.contactNumber;

    const messageWorker = () => {
        Linking.openURL(`sms:${contactNumber}`);
    }

    const callWorker = () => {
        Linking.openURL(`tel:${contactNumber}`);
    }

    return (
        <View style={styles.container}>
            <ButtonComponent
                title="Message"
                buttonStyle={{ width: '47%' }}
                onPress={messageWorker}
            />
            <ButtonComponent
                title="Call"
                buttonStyle={{ width: '45%' }}
                backgroundColor={DefaultColor.secondary}
                onPress={callWorker}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
});
