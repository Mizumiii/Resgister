import * as React from "react";
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import ViewWithLoading from "../../../components/ViewWithLoading";
import { useNavigation } from '@react-navigation/native';
import CustomText from "../../../components/StyledText";
import { Formik } from "formik";
import * as yup from 'yup';
import { TextField } from '../../../components/TextInput';
import { DefaultColor } from '../../../constants/Colors';
import ButtonComponent from '../../../components/Button/ButtonComponent';
import TouchableLink from '../../../components/Touchable/TouchableLink';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const [passwordShow, setPasswordShow] = useState<boolean>(true);
    const [retypePasswordShow, setRetypePasswordShow] = useState<boolean>(true);
    const passwordError = "Your password must contain at least 8 to 16 characters, a combination of upper and lowercase letters, and at least one number or symbol.";

    const [visible, setVisible] = useState(false);

    const registerSchema = yup.object({
        firstName: yup.string().required('Firstname address is required'),
        lastName: yup.string().required('Lastname address is required'),
        birthday: yup.mixed()
            .test('valid-date', 'Please enter a valid date', val =>
                moment(val, 'DD-MM-YYYY').isValid()
            )
            .test('valid-length', 'Please enter a valid date', val => {
                return val ? val.replace(/[-_]/g, '').length === 8 : false
            })
            .test('is-of-age', 'You must be 17 years or older to sign up ', val => {
                return moment().diff(moment(val, 'DD-MM-YYYY'), 'year') >= 17
            }),
        address: yup.string().required('Address is required'),
        mobileNumber: yup.string().required('Mobile number is required').matches(/^9\d{9}$/, 'Invalid mobile number format'),
        email: yup.string().required('Email address is required').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/, 'Invalid email address format'),
        password: yup.string().required('Password is required').matches(/^(?:(?=.*[0-9])(?=.{8,16}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])|(?=.{8,16}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)).*$/, passwordError),
        retypePassword: yup.string().required('Retype is required').oneOf([yup.ref('password'), null], 'Retype Password must match'),
    });

    const handleCheckDate = (handleChange: any, date: string) => {
        return handleChange(date);
    }

    return (
        <ViewWithLoading loading={loading}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}>
                <CustomText
                    style={styles.headerTitle}
                >Polangui Services</CustomText>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        birthday: '',
                        address: '',
                        mobileNumber: '',
                        email: '',
                        password: '',
                        retypePassword: '',
                    }}
                    validationSchema={registerSchema}
                    onSubmit={async (values, actions) => {
                        // actions.resetForm();

                    }}
                >
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                        <View style={{ flex: 1, marginTop: 30 }}>
                            <TextField
                                text={values.firstName}
                                setText={handleChange('firstName')}
                                label={"First name"}
                                errorMessage={errors.firstName}
                                touched={touched.firstName}
                            />
                            <TextField
                                text={values.lastName}
                                setText={handleChange('lastName')}
                                label={"Last name"}
                                errorMessage={errors.lastName}
                                touched={touched.lastName}
                            />
                            <View style={{
                                flex: 0,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%'
                            }}>
                                <View style={{ width: '90%' }}>
                                    <TextField
                                        text={values.birthday}
                                        setText={handleChange('birthday')}
                                        label={"Birthday"}
                                        errorMessage={errors.birthday}
                                        touched={touched.birthday}
                                        inputStyle={{ width: '100%' }}
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={() => setVisible(true)}
                                >
                                    <Ionicons name='calendar' size={30} color={DefaultColor.main} />
                                </TouchableOpacity>
                            </View>
                            <DateTimePickerModal
                                isVisible={visible}
                                mode="date"
                                onConfirm={(date) => {
                                    var dd = String(date.getDate()).padStart(2, '0');
                                    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                                    var yyyy = date.getFullYear();

                                    setVisible(false);
                                    handleCheckDate(handleChange('birthday'), `${dd}-${mm}-${yyyy}`);
                                }}
                                onCancel={() => setVisible(false)}
                                
                                isDarkModeEnabled={false}
                            />
                            <TextField
                                text={values.address}
                                setText={handleChange('address')}
                                label={"Address"}
                                errorMessage={errors.address}
                                touched={touched.address}
                            />


                            <TextField
                                text={values.mobileNumber}
                                setText={handleChange('mobileNumber')}
                                label={"Mobile Number"}
                                keyboardType={"number-pad"}
                                phoneCode={"+63"}
                                errorMessage={errors.mobileNumber}
                                touched={touched.mobileNumber}
                            />

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
                                secureEntry={passwordShow}
                                toggleEye={() => setPasswordShow(!passwordShow)}
                                showPassword={passwordShow}
                                errorMessage={errors.password}
                                touched={touched.password}
                            />
                            <TextField
                                text={values.retypePassword}
                                setText={handleChange('retypePassword')}
                                label={"Retype Password"}
                                secureEntry={retypePasswordShow}
                                toggleEye={() => setRetypePasswordShow(!retypePasswordShow)}
                                showPassword={retypePasswordShow}
                                errorMessage={errors.retypePassword}
                                touched={touched.retypePassword}
                            />

                            <View style={{ flex: 0, justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10, marginBottom: 20 }}>
                                <TouchableLink
                                    title={"By signing up, you agree to the "}
                                    onPress={() => navigation.navigate('Modal')}
                                    style={{ alignSelf: 'flex-start' }}
                                    underlineText={'Terms of Use and Privacy Policy '}
                                />
                            </View>

                            <View style={[styles.container, { marginVertical: 30 }]}>
                                <ButtonComponent
                                    title='Submit'
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 30
    }
});
