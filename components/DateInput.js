// DateInput.js
import React, { useState } from 'react';
import { View, Text} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { styles } from '../styles';

const DateInput = ({ label, placeholder, error, onBlur}) => {

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

            <DatePicker
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="grey"
                onChangeText={(text) => setValue(text)}
                onBlur={handleBlur}
   
            />
        </View>
    );
};

export default DateInput;
