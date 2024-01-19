/* eslint-disable prettier/prettier */
import { View, Text, Image, Pressable, Linking } from 'react-native';
import React from 'react';

const Germany = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{
                backgroundColor: '#BED5FF',
                width: '100%',
                height: 75,
                borderColor: '#BED5FF',
                borderWidth: 5,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',

            }}>
                <Pressable
                    onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require('./assets/arrow.png')}
                        style={{
                            height: 31,
                            width: 24,
                            margin: 10
                        }}
                    />
                </Pressable>
                <View style={{ flexDirection: 'row', marginRight: '35%' }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 800,
                        color: '#2264C7',

                    }}>Alemanha</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 50, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('./assets/frank.png')}
                                style={{
                                    height: 35,
                                    width: 85,
                                    position: "absolute"

                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text onPress={() => Linking.openURL('https://www.frankfurt-university.de/de/')} style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>Frankfurt University of {"\n"}Applied Sciences</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 15, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('./assets/kons.jpg')}
                                style={{
                                    height: 80,
                                    width: 80,
                                    position: "absolute"

                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text onPress={() => Linking.openURL('https://www.htwg-konstanz.de/')} style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>Konstanz University of {"\n"}Applied Sciences</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 15, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('./assets/tec.jpg')}
                                style={{
                                    height: 70,
                                    width: 70,
                                    position: "absolute"

                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text onPress={() => Linking.openURL('https://www.thi.de/')} style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>Technische Hochschule {"\n"}Ingolstadt</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 15, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('./assets/kai.png')}
                                style={{
                                    height: 70,
                                    width: 70,
                                    position: "absolute"

                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text onPress={() => Linking.openURL('https://rptu.de/en/home')} style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>University of {"\n"}Kaiserslautern</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                <View style={{
                    backgroundColor: '#BED5FF',
                    width: '100%',
                    height: 75,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-around',

                }}>
                    <View tyle={{
                        justifyContent: 'center'
                    }}>
                        <Pressable
                            onPress={() => navigation.navigate('Home')}>
                            <Image
                                source={require('./assets/logoSemFundo.png')}
                                style={{
                                    height: 60,
                                    width: 60,
                                }}
                            />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Germany;