import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook



const Hyperlink = ({ title, page }) => {
    const navigation = useNavigation();
    // Event Handler

    const handlePress = () => {
        navigation.navigate(page);
    };
    
    return (
        <Pressable onPress={handlePress}>
            <Text style={[styles.text, styles.link]}>{title}</Text>
        </Pressable>
    )
}

export default Hyperlink;