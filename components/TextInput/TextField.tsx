import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardTypeOptions, StyleProp, StyleSheet, TextInput, useColorScheme, ViewStyle, View } from "react-native";
import { Surface } from "react-native-paper";
import { DefaultColor } from "../../constants/Colors";
import CustomText from "../StyledText";

interface IProps {
    text: string;
    setText: (value: string) => void;
    label: string;
    secureEntry?: boolean;
    multiline?: boolean;
    toggleEye?: () => void;
    showPassword?: boolean;
    inputStyle?: StyleProp<ViewStyle>;
    errorMessage?: string;
    touched?: boolean;
    keyboardType?: KeyboardTypeOptions;
    phoneCode?: string;
    placeholder?: string;
}

export default function TextField(props: IProps) {
    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <Surface style={[styles.surfaceContainer, { borderColor: DefaultColor.main }]}>
                <CustomText style={styles.labelContainer}>
                    {props.label}
                </CustomText>

                <View style={{ flex: 0, flexDirection: 'row', borderRadius: 12, overflow: 'hidden' }}>
                    {props.phoneCode !== undefined &&
                        <View style={styles.affixContainer}>
                            <CustomText style={styles.phoneContainer}
                            >
                                {props.phoneCode}
                            </CustomText>
                        </View>
                    }
                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                        <TextInput
                            value={props.text}
                            onChangeText={props.setText}
                            secureTextEntry={props.secureEntry}
                            multiline={props.multiline}
                            placeholder={props.placeholder}
                            style={[styles.inputContainer, props.inputStyle]}
                            autoCorrect={false}
                            keyboardType={props.keyboardType}
                            autoCapitalize={'none'}
                            clearButtonMode={'while-editing'}
                            placeholderTextColor={"#C9C9C9"}
                            textAlignVertical={"center"}
                        />
                    </View>
                    {props.secureEntry !== undefined &&
                        <View style={styles.affixContainer}>
                            <Ionicons
                                name={props.showPassword ? "eye-off" : "eye"}
                                size={24}
                                color={colorScheme === 'light' ? "#000" : "#fff"}
                                style={styles.eyeContainer}
                                onPress={props.toggleEye}
                            />
                        </View>
                    }
                </View>
            </Surface>

            {props.touched && props.errorMessage &&
                <CustomText style={styles.errorStyle}>{props.errorMessage}</CustomText>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        marginVertical: 10
    },
    inputContainer: {
        flex: 0,
        height: 50,
        width: '100%',
        overflow: 'hidden',
        paddingVertical: 10,
    },
    labelContainer: {
        zIndex: 5,
        position: 'absolute',
        top: -10,
        left: 20,
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    errorStyle: {
        color: 'red',
        marginTop: 5,
    },
    eyeContainer: {
        margin: 10
    },
    surfaceContainer: {
        flex: 0,
        elevation: 4,
        borderRadius: 10,
        borderWidth: 1,
    },
    phoneContainer: {
        flex: 0,
        backgroundColor: 'white',
        marginLeft: 10,
        borderRadius: 100,
    },
    affixContainer: {
        flex: 0,
        justifyContent: 'center'
    }
});