// SignIn.js
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../components/Button';
import { styles } from '../styles';
import Hyperlink from '../components/Hyperlink';
import Input from '../components/Input';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const SignIn = () => {
    // Navigation Function
    const navigation = useNavigation();
    const navigateEvent = (page) => {
        navigation.navigate(page);
    };

    // Input Validation Functions
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        // Regular expression to validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError('Email is required');
            return false;
        }
        else if (!emailPattern.test(email)) {
            setEmailError('Invalid email format')
            return false;
        }
        else {
            setEmailError('')
            return true;
        }

    };

    const validatePassword = (password) => {
        if (!password) {
            setPasswordError('Password is required');
            return false;
        }
        else {
            setPasswordError('');
            return false;
        }

    };

    // Login Validation




    return (
        <View style={styles.onboardContainer}>
            <View style={{ flexWrap: 'wrap' }}>
                {/* Placeholder Rectangle Image Block */}
                <View
                    style={{
                        width: 280,
                        height: 150,
                        backgroundColor: '#BDBDBD', // Change this color to represent the rectangle
                        marginVertical: 10,
                    }}
                ></View>
                <Text style={styles.header}>Sign In</Text>
            </View>


            <View style={{ width: '100%', gap: 20 }}>
                <View style={{ alignItems: 'flex-end', gap: 8 }}>
             
                        <Input
                            label=" "
                            placeholder="Email"
                            error={emailError}
                            onBlur={(email) => validateEmail(email)}
                        />

                        <Input
                            label=" "
                            placeholder="Password"
                            error={passwordError}
                            onBlur={(password) => validatePassword(password)}
                            secureTextEntry={true}
                        />
          

                    <Hyperlink title="Forgot Password?" page="PasswordReset" />
                </View>
                <View style={{ alignItems: 'flex-end', gap: 8 }} >
                    <Button
                        title="Login"
                        onPress={() => navigateEvent('Test')}
                    />
                    <Text style={[styles.label, { width: 'auto', alignItems: 'flex-end' }]}>Don't Have an Account? {' '}
                        <Hyperlink title="Sign Up" page="test" />
                    </Text>
                </View>
            </View>


        </View>
    );
};

export default SignIn;
