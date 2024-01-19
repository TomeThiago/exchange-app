/* eslint-disable prettier/prettier */
import { View, Text, Image, Pressable, Linking, TouchableOpacity } from 'react-native';
import React from 'react';

const Finances = ({navigation}) => {
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
                <View style={{ flexDirection: 'row', marginRight: '35%' }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 800,
                        color: '#2264C7',

                    }}>Finanças</Text>
                </View>


            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('BankComents')}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 50, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>                       
                            <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('./assets/bank.png')}
                                    style={{
                                        height: 60,
                                        width: 60,
                                        position: "absolute"

                                    }}
                                />
                            </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>Bancos</Text>
                            <Text style={{ margin: 10, color: 'black', fontWeight: 'normal', color:'black',fontSize: 13, marginTop:-5 }}>Agências e contas {"\n"}bancárias.</Text>        
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'column', flex:1 }}>
                <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('CardComents')}>
                    <View style={{ backgroundColor: '#FBECB8', marginLeft: 20, marginTop: 15, width: 355, height: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: 91, height: 100, backgroundColor: '#FFFFFF', borderRadius: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('./assets/card.png')}
                                style={{
                                    height: 60,
                                    width: 60,
                                    position: "absolute"

                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ margin: 10, color: 'black', fontWeight: '800', fontSize: 16 }}>Cartões</Text>
                            <Text style={{ margin: 10, color: 'black', fontWeight: 'normal', color:'black',fontSize: 13, marginTop:-5 }}>Cartões Úteis</Text>        
                        </View>
                    </View>
                    </TouchableOpacity>
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

export default Finances;