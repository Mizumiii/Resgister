import * as React from "react";
import { StyleSheet, Image } from 'react-native';

import { View } from 'react-native';
import CustomText from "../../../components/StyledText";
import { Worker } from "../../../models/Worker";

interface IProps {
    worker: Worker;
}

export default function WorkerImageCard(props: IProps) {

    const { backgroundPhoto } = props.worker;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: backgroundPhoto }}
                style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'cover'
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
