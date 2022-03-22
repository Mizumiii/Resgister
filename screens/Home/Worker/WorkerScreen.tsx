import { RouteProp, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import * as React from "react";
import { useCallback, useState } from "react";
import { StyleSheet } from 'react-native';

import { View } from 'react-native';
import CustomText from "../../../components/StyledText";
import ViewWithLoading from "../../../components/ViewWithLoading";
import { WorkerContact, WorkerDescription, WorkerImageCard } from "../../../components/Worker/DetailView";
import { HomeParamList } from "../../../types";

type IRoute = {
    "params": HomeParamList['Worker'];
}

export default function WorkerScreen() {
    const [loading, setLoading] = useState<boolean>(true);
    const route = useRoute<RouteProp<IRoute, "params">>();
    const navigation = useNavigation();
    const worker = route.params.worker;

    const handleGetWorker = () => {
        // check worker latest updates
        // handleGetServices();
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    const handleGetServices = () => {
        // get latest services offer
    }

    useFocusEffect(
        useCallback(() => {
            handleGetWorker();
        }, [])
    );

    return (
        <ViewWithLoading loading={loading}>
            {!loading &&
                <View style={styles.container}>
                    <WorkerImageCard worker={worker} />
                    <WorkerDescription worker={worker} />
                    <WorkerContact
                        contactNumber={worker.contactNumber}
                    />
                </View>
            }
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
