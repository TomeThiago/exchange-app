
import { View, Text, Image, Pressable, Linking } from 'react-native';
import React from 'react';

const Canada = ({navigation}) => {
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
                <View style={{ flexDirection: 'row', marginRight: '40%' }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 800,
                        color: '#2264C7',

                    }}>Canada</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 50, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>                       
                            <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('./assets/sup.png')}
                                    style={{
                                        height: 50,
                                        width: 80,
                                        position: "absolute"

                                    }}
                                />
                            </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text onPress={() => Linking.openURL('https://www.etsmtl.ca/')}   style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>École de Technologie {"\n"}Supérieure ÉTS</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 15, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('./assets/montreal.png')}
                                style={{
                                    height: 60,
                                    width: 70,
                                    position: "absolute"

                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text onPress={() => Linking.openURL('https://www.umontreal.ca/')} style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>Université de {"\n"}Montréal</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 15, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('./assets/quebec.png')}
                                style={{
                                    height: 20,
                                    width: 71,
                                    position: "absolute"

                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text onPress={() => Linking.openURL('https://uqam.ca/')} style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>Université du {"\n"}Québec à Montréal</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', flex:1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 15, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('./assets/regina.jpg')}
                                style={{
                                    height: 60,
                                    width: 70,
                                    position: "absolute"

                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text onPress={() => Linking.openURL('https://www.uregina.ca/')} style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>University of {"\n"}Regina</Text>
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

export default Canada;