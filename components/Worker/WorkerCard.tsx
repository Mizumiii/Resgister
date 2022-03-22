import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, StyleSheet, StyleProp, ViewStyle, Image, TouchableOpacity } from "react-native";
import { Rating } from "react-native-elements";
import { DefaultColor } from "../../constants/Colors";
import { Worker } from "../../models/Worker";
import CustomText from "../StyledText";
import WorkIconText from "./WorkerIconText";
import WorkerRate from "./WorkerRate";

interface IProps {
    worker: Worker;
    style?: StyleProp<ViewStyle>;
    isRow?: boolean
}


export default function WorkerCard(props: IProps) {
    const { worker, style, isRow } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Worker", { worker })}
        >
            <View style={
                [
                    styles.container,
                    isRow ? styles.rowContainer : styles.colContainer,
                    style
                ]
            }>
                <View style={
                    [
                        styles.imageContainer,
                        isRow ? { width: '100%' } : { height: '100%' }
                    ]
                }>
                    <Image
                        source={{ uri: worker.backgroundPhoto }}
                        style={styles.imageStyle}
                    />
                </View>
                <View style={[
                    styles.infoContainer,
                    isRow ? { width: '100%' } : { height: '100%' }
                ]
                }>
                    <View style={{ flex: 1, }}>
                        <CustomText
                            style={styles.titleStyle}
                            numberOfLines={1}
                        >
                            {worker.businessName}
                        </CustomText>
                        <WorkIconText
                            iconName={'person'}
                            text={worker.getFullName()}
                        />
                        <WorkIconText
                            iconName={'location'}
                            text={worker.address}
                        />
                    </View>
                    <WorkerRate
                        rate={worker.rating}
                    />
                </View>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: DefaultColor.main
    },
    rowContainer: {
        width: 200,
        height: 230,
    },
    colContainer: {
        width: '100%',
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        flex: 0,
        height: '50%',
        width: '50%',
        overflow: 'hidden',
        borderRadius: 10,
        borderWidth: 1,
    },
    imageStyle: {
        height: '100%',
        width: '100%',
    },
    infoContainer: {
        flex: 0,
        height: '50%',
        width: '50%',
        padding: 5,
    },
    titleStyle: {
        fontFamily: 'sans-semibold',
        fontSize: 16,
        color: DefaultColor.black,
        marginBottom: 10
    },
    bodyStyle: {

    }
});