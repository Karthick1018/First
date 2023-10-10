import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, TouchableOpacity, DrawerLayoutAndroid, Linking } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Avatar } from 'react-native-elements';
import { Badge, Button, Drawer } from 'native-base';
import { Modal, Searchbar, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Login = () => {
    const [img, setImg] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredImg, setFilteredImg] = useState([]);

    const fetch = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/?results=100')
            if (response.data.results) {
                setImg(response.data.results);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setRefreshing(false);
        }
    };
    const navigation = useNavigation();
    const onPressButton = () => {
        navigation.navigate('Content')
    }

    const onRefresh = async () => {
        setRefreshing(true);
        await fetch();
        setRefreshing(false);
    };

    useEffect(() => {
        fetch();
    }, []);
    // useEffect(() => {
    //     const filteredImages = img.filter(data =>
    //         results.name.first.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    //     setFilteredImg(filteredImages);
    // }, [searchQuery, img]);

    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({ item }) => (
        <Card key={item.index} containerStyle={styles.productCard}>
            <View style={styles.cardContent}>
                <Avatar
                    rounded
                    source={{ uri: item.picture.large }}
                    size="medium"
                    containerStyle={styles.avatar}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.Title}>
                        {item.name.first} {item.name.last}
                    </Text>
                </View>
                <Badge style={styles.badge}>{item.dob.age}</Badge>
            </View>
        </Card>
    );
    // const drawer = useRef(false);
    // const navigationView = () => (
    //     <View>
    //         <TouchableOpacity
    //             onPress={() => openLink('https://www.instagram.com')}>
    //             <FontAwesome
    //                 name="instagram"
    //                 size={30}
    //                 color="#000"
    //                 style={styles.icon} />
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //             onPress={() => openLink('https://www.facebook.com')}>
    //             <FontAwesome
    //                 name="facebook"
    //                 size={30}
    //                 color="#000"
    //                 style={styles.icon} />
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //             onPress={() => openLink('https://www.gmail.com')}>
    //             <FontAwesome
    //                 name="envelope"
    //                 size={30}
    //                 color="#000"
    //                 style={styles.icon} />
    //         </TouchableOpacity>
    //     </View>
    // );
    // const openLink = (url) => {
    //     Linking.openURL(url).catch(err => console.error('An error occurred', err));
    // };
    // useEffect(() => {
    //     drawer.current.openDrawer();
    // }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.welcomeText}>Welcome Back</Text>
            </View>
            <View style={styles.searchbar}>
                <Searchbar style={styles.searchtext}
                    placeholder="Search"
                    value={searchQuery}
                />
            </View>
            <FlatList
                data={img}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContent}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
            {/* <Drawer.CollapsedItem
                focusedIcon="inbox"
                unfocusedIcon="inbox-outline"
                label="Inbox"
            /> */}
            <TouchableOpacity
                onPress={onPressButton}
                style={styles.button}
            >
                <Text>Content Page</Text>
            </TouchableOpacity>
            {/* <View style={{ height: '20%' }}>

                <DrawerLayoutAndroid
                    ref={drawer}
                    drawerWidth={300}
                    renderNavigationView={navigationView}>
                    <View >
                        <Button
                            title="Press"
                            onPress={() => drawer.current.openDrawer()}
                        />
                    </View>

                </DrawerLayoutAndroid>
            </View> */}
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bad7e6',
    },
    welcomeText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#0f0f0f',
        textAlign: 'center',
        paddingVertical: 20
    },
    productCard: {
        backgroundColor: '#dfe6e4',
        borderRadius: 24,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        marginLeft: 20,
    },
    Title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    flatListContent: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    badge: {
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00aaff',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10
    },
    searchbar: {
        paddingHorizontal: 20,
        margin: 10,
    },
    searchtext: {
        backgroundColor: '#dfe6e4',
    }

});

export default Login;




