// Button.js

import React, {useState} from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../styles';


const Button = ({ title, onPress, bgColor = "#FFD347", txtColour = "black", pressedColor = "#E6B000" }) => {
    // Event Handler
    // const handlePress = () => {
    //     if (onPress) {
    //         onPress();
    //     }
    // };

    // Checks if Button is being pressed
    const [isPressed, setPressed] = useState(false);

    const handlePressIn = () => {
        setPressed(true);
    };

    const handlePressOut = () => {
        setPressed(false);
    };

    return (
        <Pressable
            style={({ pressed }) => [
                styles.buttonContainer,
                {
                    backgroundColor: pressed || isPressed ? pressedColor : bgColor,
                },
            ]}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Text style={[styles.buttonText, { color: txtColour }]}>{title}</Text>
        </Pressable>
    )
}

export default Button;