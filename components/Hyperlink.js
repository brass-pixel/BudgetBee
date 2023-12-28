import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from '../styles';



const Hyperlink = ({ title, page }) => {
    // Event Handler
    const handlePress = () => {
        if (onPress) {
            onPress();
        }
    };
    return (
        <Pressable>
            <Text style={[styles.text, styles.link]}>{title + page}</Text>
        </Pressable>
    )
}

export default Hyperlink;