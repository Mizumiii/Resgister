import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { View, StyleSheet, ScrollView, ViewStyle, StyleProp, TextStyle } from "react-native";
import { DefaultColor } from "../../constants/Colors";
import { Worker } from "../../models/Worker";
import CustomText from "../StyledText";
import WorkerCard from "./WorkerCard";

interface IProps {
    text: string;
    iconName: any;
    textStyle?: StyleProp<TextStyle>;
    iconSize?: number;
    style?: StyleProp<ViewStyle>;
}

export default function WorkIconText(props: IProps) {
    const { text, iconName, style, textStyle, iconSize } = props;
    return (
        <View style={[styles.container, style]}>
            <Ionicons
                name={iconName}
                size={iconSize ? iconSize : 14}
                color={DefaultColor.main}
                style={{ marginRight: 10 }}
            />
            <CustomText
                style={[styles.textStyle, textStyle]}
                numberOfLines={1}
            >
                {text}
            </CustomText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },
    textStyle: {

    }
});