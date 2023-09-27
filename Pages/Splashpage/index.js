import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View, Image, StyleSheet } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

function Splash() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const spinValue = useRef(new Animated.Value(0)).current;

    const rotateImage = () => {
        spinValue.setValue(0);
        Animated.timing(spinValue, {
            toValue: 1,
            easing: Easing.linear,
            useNativeDriver: true,
            duration: 1000,
        }).start(() => {
            navigation.navigate('Login');
        });
    };

    useEffect(() => {
        if (isFocused) {
            rotateImage();
        }
    }, [isFocused]);

    const spin = spinValue.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });

    return (
        <View
            style={styles.container}
        >
            <Animated.Image
                style={{ transform: [{ rotate: spin }], width: 150, height: 150 }}
                source={require('C:/Users/karthi/First/assets/aaludra.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bad7e6'
    },
});

export default Splash;
