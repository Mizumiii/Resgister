import * as React from "react";
import { StyleSheet } from 'react-native';

import { View } from 'react-native';
import CustomText from "../../../components/StyledText";
import { Worker } from "../../../models/Worker";
import WorkIconText from "../WorkerIconText";
import WorkerRate from "../WorkerRate";
import WorkerContact from "./WorkerContact";

interface IProps {
    worker: Worker;
}


export default function WorkerDescription(props: IProps) {
    const { businessName, firstName, lastName, address, contactNumber, rating } = props.worker;
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <CustomText style={styles.titleStyle}>
                    {businessName}
                </CustomText>
            </View>
            <WorkIconText
                iconName={"person"}
                text={`${firstName} ${lastName}`}
                iconSize={16}
                textStyle={{ fontSize: 16 }}
                style={{ marginBottom: 10 }}
            />
            <WorkIconText
                iconName={"location"}
                text={address}
                iconSize={16}
                textStyle={{ fontSize: 16 }}
                style={{ marginBottom: 10 }}
            />
            <WorkerRate
                rate={rating}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 5,
        paddingHorizontal: 10
    },
    titleStyle: {
        fontFamily: 'sans-semibold',
        fontSize: 20
    },
    headerContainer: {
        flex: 0,
        width: '100%',
        marginVertical: 10
    },
});
