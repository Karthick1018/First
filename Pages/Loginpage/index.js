import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    ImageBackground,
    Alert,
    TouchableOpacity,
} from 'react-native';

function Home({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [selectedValue, setSelectedValue] = useState('option1');

    const onPressButton = () => {
        if (username === '' || password === '') {
            Alert.alert('Login ERROR', 'Try Again');
        } else if (username !== password) {
            Alert.alert('Login ERROR', 'Try Again');
        } else {
            navigation.replace('Home');
        };
       // navigation.replace('Home');
    }

    return (
        <ImageBackground
            source={{
                uri: 'https://img.freepik.com/free-vector/blue-neon-synthewave-patterned-background-vector_53876-172987.jpg?size=626&ext=jpg&ga=GA1.1.1821233411.1693142487&semt=ais',
            }}
            resizeMode='cover'
            alt='ijaaaaz'
        >
            <SafeAreaView style={styles.container}>
                <View style={{ height: '30%' }}>
                    <View style={styles.team}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://aaludra.com/wp-content/uploads/elementor/thumbs/4x-aaludra-logo-gradient-with-white-text-2-q6n18dgs2aox0eelbemq9ks4a9fjzt178p11c54l7s.png',
                            }}
                        />
                    </View>

                    <Text style={styles.welcometext}>
                        Welcome to Aaludra
                    </Text>

                    <Text style={styles.logintext}>
                    New updates are waiting for you, lets gooo!
                    </Text>

                    <TextInput
                        style={styles.emailtext}
                        placeholder='User Name'
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        style={styles.emailtext}
                        placeholder='Password'
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />

                    {/* <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue) =>
                            setSelectedValue(itemValue)
                        }
                        style={styles.dropdown}
                    >
                        <Picker.Item label=' Student' value='option1' />
                        <Picker.Item label='Employee' value='option2' />
                        <Picker.Item label='Freshers ' value='option3' />
                    </Picker> */}

                    <TouchableOpacity
                        onPress={onPressButton}
                        style={styles.button}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%',
    },
    welcometext: {
        color: '#EEEEEE',
        fontSize: 28,
        fontWeight: 'bold',
    },
    logintext: {
        color: '#EEEE',
        fontSize: 13,
        fontWeight: 'bold',
    },
    emailtext: {
        color: 'black',
        backgroundColor: 'lightgray',
        margin: 9,
        borderRadius: 100,
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 22,
    },
    dropdown: {
        fontSize: 20,
        color: 'black',
        backgroundColor: 'lightgray',
        margin: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00aaff',
        height: 30,
        width: 100,
        marginTop: 20,
        justifyContent: 'center',
        margin: 65,
        borderRadius: 100
    },

});

export default Home;


