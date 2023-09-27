import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function MyComponent() {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route }) => {
                        if (route.name === 'Home') {
                            navigation.navigate('Splash');
                        } else if (route.name === 'Settings') {
                            navigation.navigate('Login');
                        } 
                    }}
                    renderIcon={({ route, focused,  }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                ? options.title
                                : route.title;

                        return label;
                    }}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({  size }) => {
                        return <Icon name="home" size={size}  />;
                    },
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({  size }) => {
                        return <Icon name="cog" size={size}  />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}
function HomeScreen() {
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Card
                    style={styles.card}>
                    <Text
                        style={styles.Questiontext}>
                        What is canvas in React Native?
                    </Text>
                    <Text>
                        The Canvas component is the root of your Skia drawing. You can treat it as a regular React Native view and assign a view style. Behind the scenes, it is using its own React renderer.
                    </Text>
                </Card>
                <Card
                    style={styles.card}>
                    <Text
                        style={styles.Questiontext}>
                        Can we use canvas in react?
                    </Text>
                    <Text>
                        Canvas is a powerful tool for creating graphics and animations on the web, and React provides a declarative way of building user interfaces. By combining these technologies.
                    </Text>
                </Card>
                <Card
                    style={styles.card}>
                    <Text
                        style={styles.Questiontext}>
                        What is canvas in React Native?
                    </Text>
                    <Text>
                        The Canvas component is the root of your Skia drawing. You can treat it as a regular React Native view and assign a view style. Behind the scenes, it is using its own React renderer.
                    </Text>
                </Card>
                <Card
                    style={styles.card}>
                    <Text
                        style={styles.Questiontext}>
                        Can we use canvas in react?
                    </Text>
                    <Text>
                        Canvas is a powerful tool for creating graphics and animations on the web, and React provides a declarative way of building user interfaces. By combining these technologies.
                    </Text>
                </Card>
                <Card
                    style={styles.card}>
                    <Text
                        style={styles.Questiontext}>
                        Can we use canvas in react?
                    </Text>
                    <Text>
                        Canvas is a powerful tool for creating graphics and animations on the web, and React provides a declarative way of building user interfaces. By combining these technologies.
                    </Text>
                </Card>
            </ScrollView>

        </SafeAreaView>
    )

}

function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Settings!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#cfc6b0",
        height: '100%',
        width: '100%'
    },
    // switch: {
    //     color: 'red'
    // },
    card: {
        height: '20%',
        backgroundColor: '#bad7e6',
        margin: 20
    },
    Questiontext: {
        fontSize: 15,
        fontWeight: 'bold',

    },
})


