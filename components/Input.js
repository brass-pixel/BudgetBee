// Input.js

import React from 'react';
import { TextInput, Text } from 'react-native';
import { styles } from '../styles';

const Input = ({label, placeholder}) => {


    return (
        <Text style={styles.label}>
            {label}
            <TextInput
                style={styles.input}
                placeholder={placeholder} />
        </Text>
    )
}

export default Input;