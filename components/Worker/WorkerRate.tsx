import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Rating } from "react-native-elements";
import CustomText from "../StyledText";


interface IProps {
    rate: number;
    text?: string;
}

export default function WorkerRate(props: IProps) {
    const { rate, text } = props;

    return (
        <View style={styles.container}>
            <CustomText style={{ marginRight: 5 }}>
                {text} {rate}
            </CustomText>
            <Rating
                type="star"
                fractions={1}
                startingValue={rate}
                readonly
                imageSize={14}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
    }
});