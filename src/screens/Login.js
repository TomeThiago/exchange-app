/* eslint-disable prettier/prettier */
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import Button from './assets/components/Button';
import { api } from '../service/api';
import { Loading } from '../components/Loading';



const Login = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            setIsLoading(true);

            const response = await api.post('/auth/login', {
                login: email,
                password,
            });

            api.defaults.headers.authorization = `Bearer ${response.data.token}`;

            navigation.navigate('Home')
        } catch (error) {
            alert('Usuário ou senha inválidos');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly' }}>
            {isLoading && (
                <Loading title={'Carregando a tela...'} />
            )}

            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: 20 }}>
                    <Image
                        source={require('./assets/logoSemFundo.png')}
                        style={{
                            height: 100,
                            width: 100,
                        }}
                    />
                    <View style={{
                        width: '100%',
                    }}>
                        <Text style={{
                            fontSize: 40,
                            fontWeight: 800,
                            color: '#2264C7',
                        }}>ExchangeU</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{
                        width: "90%",
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
                        width: "90%",
                        height: 48,
                        marginTop: 20,
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
                </View>

                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Button
                        title="Acessar"
                        onPress={handleLogin}
                        disabled={isLoading}
                        style={{
                            marginTop: 15,
                            width: '90%',
                            marginBottom: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    />
                    <Button
                        title="Voltar"
                        onPress={() => navigation.navigate('Welcome')}
                        style={{
                            marginTop: -22,
                            width: '90%',
                            marginBottom: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: -15,
                    margin: 40
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: '#2264C7',
                    }}></Text>
                    <Pressable
                        onPress={() => navigation.navigate('PassForgot')}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: '#2264C7',
                            fontWeight: 'bold',
                            marginLeft: -15
                        }}>Esqueci minha senha</Text>
                    </Pressable>

                </View>
            </View>
        </View>

    );
};

export default Login;
