/* eslint-disable prettier/prettier */
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import React from 'react';
import Button from './assets/components/Button';

const NewPass = ({navigation}) => {
    return (

        <View style={{ backgroundColor: '#BED5FF', flex: 1, alignItems: 'center' }}>
            <Text style={{
                fontSize: 25,
                top: 40,
                fontWeight: 800,
                color: '#2264C7',
            }}>Redefinição de Senha</Text>
            <View style={{
                width: "90%",
                height: 48,
                top: 100,
                borderColor: '#CACCCC',
                backgroundColor: '#F1F5F4',
                borderWidth: 1,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22
            }}>
                <TextInput
                    placeholder='Senha'
                    placeholderTextColor='#797B7A'
                    keyboardType='ascii-capable'
                    style={{
                        width: "100%"
                    }}
                />

            </View>
            <View style={{
                width: "90%",
                height: 48,
                marginTop: 15,
                top: 100,
                borderColor: '#CACCCC',
                backgroundColor: '#F1F5F4',
                borderWidth: 1,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22
            }}>
                <TextInput
                    placeholder='Confirma Senha'
                    placeholderTextColor='#797B7A'
                    keyboardType='ascii-capable'
                    style={{
                        width: "100%"
                    }}
                />

            </View>
            <View>
                <Button
                    title="Salvar"
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        marginTop: 120,
                        width: 350,
                        marginBottom: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                />
                <Button
                    title="Sair"
                    onPress={() => navigation.navigate('Welcome')}
                    style={{
                        marginTop: 280,
                        width: 350,
                        marginBottom: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                />
            </View>
            <View style={{
                alignItems: 'center'
            }}>
                <Pressable
                    onPress={() => navigation.navigate('Welcome')}>
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


    );
};

export default NewPass;
