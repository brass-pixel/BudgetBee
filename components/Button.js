// Button.js

import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../styles';


const Button = ({ title, onPress, bgColor = "#FFC300", txtColour = "black"}) => {
    // Event Handler
    const handlePress = () => {
        if (onPress) {
            onPress();
        }
    };

    return (
        <Pressable style={
            [styles.buttonContainer, 
            {backgroundColor: bgColor}]} 
            onPress={handlePress}>
            <Text style={[styles.buttonText, {color:txtColour}]}>{title}</Text>
        </Pressable>
    )
}

export default Button;