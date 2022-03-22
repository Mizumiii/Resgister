import * as React from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { TextField } from "../../../components/TextInput";
import { useState } from "react";
import TouchableLink from "../../../components/Touchable/TouchableLink";
import { DefaultColor } from "../../../constants/Colors";
import ButtonComponent from "../../../components/Button/ButtonComponent";
import { useNavigation } from "@react-navigation/core";
import { Formik } from "formik";
import * as yup from 'yup';
import { errorMessage } from "../../../utils/ErrorMessage";
import CustomText from "../../../components/StyledText";


interface IProps {
    setLoading: (value: boolean) => void;
}

export default function LoginForm(props: IProps) {
    // navigation
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState<boolean>(true);


    const loginSchema = yup.object({
        email: yup.string().required('Email address is required').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/, 'Invalid email address format'),
        password: yup.string().required('Password is required')
    });

    const user = {
        emailAddress: "juandelacruz@gmail.com",
        password: "2020Rtutest@"
    }


    const handleLogin = (email: string, password: string) => {
        props.setLoading(true);
        setTimeout(() => {
            if (email === user.emailAddress && user.password === password) {
                return navigation.navigate("Auth");
            }
            props.setLoading(false);
            Alert.alert("Error", "Email and Password doesn't match.");
        }, 2000);
    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Formik
                    initialValues={{
                        email: 'juandelacruz@gmail.com',
                        password: '2020Rtutest@'
                    }}
                    validationSchema={loginSchema}
                    onSubmit={async (values, actions) => {
                        handleLogin(values.email, values.password);
                    }}
                >
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                        <View style={{ flex: 1, marginTop: 30 }}>
                            <TextField
                                text={values.email}
                                setText={handleChange('email')}
                                label={"Email"}
                                errorMessage={errors.email}
                                touched={touched.email}
                            />
                            <TextField
                                text={values.password}
                                setText={handleChange('password')}
                                label={"Password"}
                                secureEntry={showPassword}
                                toggleEye={() => setShowPassword(!showPassword)}
                                showPassword={showPassword}
                                errorMessage={errors.password}
                                touched={touched.password}
                            />
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end'
                                }}
                            >
                                <CustomText style={{
                                    color: DefaultColor.main
                                }}>Forgot Password</CustomText>
                            </TouchableOpacity>

                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <ButtonComponent
                                    title={"LOGIN"}
                                    onPress={handleSubmit}
                                    backgroundColor={DefaultColor.main}
                                />
                                <View style={{ flex: 0, alignItems: 'center', marginTop: 20 }}>
                                    <TouchableLink
                                        title={"Don't Have an Account yet? "}
                                        underlineText={"Sign up"}
                                        onPress={() => navigation.navigate("Register")}
                                    />
                                </View>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    linkContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
});