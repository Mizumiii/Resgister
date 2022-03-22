import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { useCallback, useState } from "react";
import ViewWithLoading from "../../../components/ViewWithLoading";
import { StyleSheet } from "react-native";
import LoginForm from "./LoginForm";
import Header from "./Header";
import { View } from 'react-native';
import CustomText from "../../../components/StyledText";

export default function LoginScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    return (
        <ViewWithLoading loading={loading}>
            {!loading &&
                <View style={styles.container}>
                    <Header
                        headerText={"Login using email"}
                    />
                    <LoginForm
                        setLoading={setLoading}
                    />
                </View>
            }
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
