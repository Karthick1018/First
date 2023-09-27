import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Homepage';
import Login from './Pages/Loginpage';
import Splash from './Pages/Splashpage';
import Content from './Pages/Contentpage';

const Stack = createNativeStackNavigator();

function CustomNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={
                { animation: 'none', transitionConfig: () => ({ transitionSpec: { duration: 1000, }, }), }
            }
            stackId="MainStack" >
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Content' component={Content} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default CustomNavigator;
