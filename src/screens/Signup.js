/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React from 'react';
import { useState } from 'react';
import cam from './assets/cam.png';
import Button from './assets/components/Button'
import { api } from '../service/api';
import { Loading } from '../components/Loading';

const Signup = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [college, setCollege] = useState('');

    const [profile, setProfile] = useState(null);

    const imagePick = () => {
        alert('abrir aqui');
    };

    const handleCreateAccount = async () => {
        if (password != passwordConfirm) {
            return Alert.alert('Erro na criação do usuário', "As senhas devem ser iguais");
        }

        try {
            setIsLoading(true);

            await api.post('/auth/create', {
                name,
                email,
                password,
                college,
            });

            const response = await api.post('/auth/login', {
                login: email,
                password
            })

            api.defaults.headers.authorization = `Bearer ${response.data.token}`;

            navigation.navigate('Home');
        } catch {
            Alert.alert('Erro na criação do usuário', "Ocorreu um erro na criação do usuário, aguarde e tente novamente mais tarde");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading && (
                <Loading title="Aguarde, criando conta..." />
            )}
            <View style={{
                backgroundColor: '#BED5FF',
                width: '100%',
                height: 75,
                borderColor: '#BED5FF',
                borderWidth: 5,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                position: 'relative',
                flex: 1
            }}>

                <Image
                    source={require('./assets/logoSemFundo.png')}
                    style={{
                        height: 60,
                        width: 60,
                        top: 5,
                        left: 50,

                    }}
                />
                <Text style={{
                    marginLeft: 140,
                    top: -40,
                    paddingVertical: 1,
                    fontSize: 25,
                    fontWeight: 800,
                    color: '#2264C7',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>Nova Conta</Text>
                <View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('./assets/imgPlaceHolder.png')} style={{ width: 120, height: 110 }} />
                        <View style={{ marginTop: -30, marginLeft: 70 }}>
                            <TouchableOpacity onPress={imagePick}
                                style={{ alignItems: 'flex-end' }}>
                                <Image style={{ width: 50, height: 50 }} source={profile ? { uri: profile } : cam} />
                            </TouchableOpacity>
                        </View>


                    </View>

                    <View style={{ margin: 20 }}>

                        <View style={{
                            width: "100%",
                            height: 48,
                            borderColor: '#CACCCC',
                            backgroundColor: '#F1F5F4',
                            borderWidth: 1,
                            borderRadius: 15,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: 22
                        }}>
                            <TextInput
                                placeholder='Nome de Usuário'
                                placeholderTextColor='#797B7A'
                                keyboardType='ascii-capable'
                                onChangeText={(value) => setName(value)}
                                style={{
                                    width: "100%"
                                }}
                            />
                        </View>
                        <View style={{
                            width: "100%",
                            height: 48,
                            marginTop: 15,
                            borderColor: '#CACCCC',
                            backgroundColor: '#F1F5F4',
                            borderWidth: 1,
                            borderRadius: 15,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: 22
                        }}>
                            <TextInput
                                placeholder='Email'
                                placeholderTextColor='#797B7A'
                                keyboardType='email-address'
                                onChangeText={(value) => setEmail(value)}
                                style={{
                                    width: "100%"
                                }}
                            />
                        </View>
                        <View style={{
                            width: "100%",
                            height: 48,
                            marginTop: 15,
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
                                secureTextEntry={true}
                                keyboardType='default'
                                onChangeText={(value) => setPassword(value)}
                                style={{
                                    width: "100%"
                                }}
                            />
                        </View>

                        <View style={{
                            width: "100%",
                            height: 48,
                            marginTop: 15,
                            borderColor: '#CACCCC',
                            backgroundColor: '#F1F5F4',
                            borderWidth: 1,
                            borderRadius: 15,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: 22
                        }}>
                            <TextInput
                                placeholder='Confirmar Senha'
                                placeholderTextColor='#797B7A'
                                secureTextEntry={true}
                                keyboardType='default'
                                onChangeText={(value) => setPasswordConfirm(value)}
                                style={{
                                    width: "100%"
                                }}
                            />
                        </View>
                        <View style={{
                            width: "100%",
                            height: 48,
                            marginTop: 15,
                            borderColor: '#CACCCC',
                            backgroundColor: '#F1F5F4',
                            borderWidth: 1,
                            borderRadius: 15,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: 22
                        }}>
                            <TextInput
                                placeholder='Instituição de Ensino'
                                placeholderTextColor='#797B7A'
                                keyboardType='default'
                                onChangeText={(value) => setCollege(value)}
                                style={{
                                    width: "100%"
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around', top: 75 }}>
                            <Button
                                title="Criar Conta"
                                onPress={handleCreateAccount}
                                style={{
                                    width: '100%',
                                    marginBottom: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            />
                            <Button
                                title="Sair"
                                onPress={() => navigation.navigate('Welcome')}
                                style={{
                                    width: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            />
                        </View>

                    </View>

                </View>
            </View>
        </>
    );
};

export default Signup;
