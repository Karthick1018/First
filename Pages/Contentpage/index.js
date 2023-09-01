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
                        } else {
                            navigation.navigate(route.name);
                        }
                    }}
                    renderIcon={({ route, focused,  }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, color, size: 24 });
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
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="home" size={size} color={'red'} />;
                    },
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="cog" size={size} color={color} />;
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
    switch: {
        color: 'red'
    },
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




// import React from 'react';
// import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { Text, BottomNavigation, Appbar } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Card, ScrollView } from 'native-base';
// import { useNavigation } from '@react-navigation/native';

// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close Drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <Card style={styles.card}>
//           <Text style={styles.Questiontext}>
//             What is canvas in React Native?
//           </Text>
//           <Text>
//             The Canvas component is the root of your Skia drawing. You can treat it as a regular React Native view and assign a view style. Behind the scenes, it is using its own React renderer.
//           </Text>
//         </Card>
//         <Card style={styles.card}>
//           <Text style={styles.Questiontext}>
//             Can we use canvas in react?
//           </Text>
//           <Text>
//             Canvas is a powerful tool for creating graphics and animations on the web, and React provides a declarative way of building user interfaces. By combining these technologies.
//           </Text>
//         </Card>
//         <Card style={styles.card}>
//           <Text style={styles.Questiontext}>
//             What is canvas in React Native?
//           </Text>
//           <Text>
//             The Canvas component is the root of your Skia drawing. You can treat it as a regular React Native view and assign a view style. Behind the scenes, it is using its own React renderer.
//           </Text>
//         </Card>
//         <Card style={styles.card}>
//           <Text style={styles.Questiontext}>
//             Can we use canvas in react?
//           </Text>
//           <Text>
//             Canvas is a powerful tool for creating graphics and animations on the web, and React provides a declarative way of building user interfaces. By combining these technologies.
//           </Text>
//         </Card>
//         <Card style={styles.card}>
//           <Text style={styles.Questiontext}>
//             Can we use canvas in react?
//           </Text>
//           <Text>
//             Canvas is a powerful tool for creating graphics and animations on the web, and React provides a declarative way of building user interfaces. By combining these technologies.
//           </Text>
//         </Card>
//       </ScrollView>
//       <TouchableOpacity
//         style={styles.drawerButton}
//         onPress={() => navigation.openDrawer()}
//       >
//         <Icon name="menu" size={24} color="black" />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }

// function SettingsScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.drawerButton}
//         onPress={() => navigation.openDrawer()}
//       >
//         <Icon name="menu" size={24} color="black" />
//       </TouchableOpacity>
//       <Text variant="headlineMedium">Settings!</Text>
//     </View>
//   );
// }

// export default function MyComponent() {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawerContent {...props} />}
//     >
//       <Drawer.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           drawerLabel: 'Home',
//           drawerIcon: ({ color, size }) => (
//             <Icon name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{
//           drawerLabel: 'Settings',
//           drawerIcon: ({ color, size }) => (
//             <Icon name="cog" size={size} color={color} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: "#cfc6b0",
//     height: '100%',
//     width: '100%'
//   },
//   card: {
//     height: '20%',
//     backgroundColor: '#bad7e6',
//     margin: 20
//   },
//   Questiontext: {
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   drawerButton: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     zIndex: 1,
//   },
// });

