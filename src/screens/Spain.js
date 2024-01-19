/* eslint-disable prettier/prettier */
import { View, Text, Image, Pressable, Linking } from 'react-native';
import React from 'react';

const Spain = ({navigation}) => {
    return (
        <View style={{flex:1}}>

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
                <View style={{ flexDirection: 'row', marginRight: 140 }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 800,
                        color: '#2264C7',

                    }}>Espanha</Text>
                </View>


            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 50, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>                       
                            <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('./assets/salamanca.png')}
                                    style={{
                                        height: 60,
                                        width: 90,
                                        position: "absolute"

                                    }}
                                />
                            </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text onPress={() => Linking.openURL('https://www.usal.es/')}   style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>Universidad de {"\n"}Salamanca</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 15, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('./assets/sevilla.png')}
                                style={{
                                    height: 60,
                                    width: 68,
                                    position: "absolute"

                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text onPress={() => Linking.openURL('https://www.us.es/')} style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>Universidad de {"\n"}Sevilla</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 15, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('./assets/valencia.png')}
                                style={{
                                    height: 70,
                                    width: 55,
                                    position: "absolute"

                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text onPress={() => Linking.openURL('https://www.uv.es/')} style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>Universitat de {"\n"}València</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', flex:1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 15, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('./assets/zaragoza.png')}
                                style={{
                                    height: 65,
                                    width: 60,
                                    position: "absolute"

                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text onPress={() => Linking.openURL('https://www.unizar.es/')} style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>Universidad de {"\n"}Zaragoza</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'column', alignItems:'flex-end'}}>
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

export default Spain;