// Button.js

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from './styles';


const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={buttonStyles.buttonContainer} onPress={onPress}>
            <Text style={buttonStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;