// Input.js

import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from '../styles';

const Input = ({ label, placeholder, error, onBlur, secureTextEntry}) => {

    const [value, setValue] = useState('');

    const handleBlur = () => {
        if (onBlur) {
            onBlur(value);
        }
    };

    return (
        //Optional Label
        <View style={styles.inputContainer}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.label}>
                    {label}
                </Text>
                <Text style={styles.errorText}>
                    {error ? error : ' '}
                </Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="grey"
                onChangeText={(text) => setValue(text)}
                onBlur={handleBlur}
                secureTextEntry = {secureTextEntry}
            />
        </View>
    );
};

export default Input;