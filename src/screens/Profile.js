/* eslint-disable prettier/prettier */
import { View, Text, Image, TouchableOpacity, TextInput, Pressable, Modal, StyleSheet } from 'react-native';
import React from 'react';
import { useState } from 'react';
import cam from './assets/cam.png';
import Button from './assets/components/Button'

const Profile = ({ navigation }) => {
    const [profile, setProfile] = useState(null);
    const imagePick = () => {
        alert('abrir aqui');
    };
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{
            backgroundColor: '#BED5FF',
            width: '100%',
            height: 250,
            borderColor: '#BED5FF',
            borderWidth: 5,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            flexDirection: 'column',
            alignItems: 'center',

        }}>
            <View style={{ height: 50, width: 380, marginTop: 30, justifyContent: 'center', flexDirection: 'row' }}>
                <Pressable
                    onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require('./assets/arrow.png')}
                        style={{
                            height: 31,
                            width: 24,
                            right: 150
                        }}
                    />
                </Pressable>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: '#2264C7',
                    right: 10

                }}>Perfil</Text>

            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('./assets/imgPlaceHolder.png')} style={{ width: 120, height: 110, marginTop: 15 }} />
                <View style={{ marginTop: -30, marginLeft: 70 }}>
                    <TouchableOpacity onPress={imagePick}
                        style={{ alignItems: 'flex-end' }}>
                        <Image style={{ width: 50, height: 50 }} source={profile ? { uri: profile } : cam} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:'column', margin:70 }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Está prestes a sair do aplicativo </Text>
                            <Text style={{fontWeight:'800',fontSize: 24, color: '#2264C7'}}>Tem certeza? </Text>
                            <View style={{flexDirection:'row', JustifyContent:'space-between'}}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => navigation.navigate('Welcome')}>
                                <Text style={styles.textStyle}>Sim</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Não</Text>
                            </Pressable>
                            </View>
                            
                        </View>
                    </View>
                </Modal>
                <View style={{
                    width: 322,
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
                        style={{
                            width: "100%"
                        }}
                        editable={false}
                    />
                </View>
                <View style={{
                    width: 322,
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
                        style={{
                            width: "100%"
                        }}
                        editable={false}
                    />
                </View>
                <View style={{
                    width: 322,
                    height: 48,
                    marginTop: 15,
                    borderColor: '#CACCCC',
                    backgroundColor: '#F1F5F4',
                    borderWidth: 1,
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22, 
                    marginBottom:50
                }}>
                    <TextInput
                        placeholder='Instituição de Ensino'
                        placeholderTextColor='#797B7A'
                        keyboardType='email-address'
                        style={{
                            width: "100%"
                        }}
                        editable={false}
                    />
                </View>
                <View>
                    <Button
                        title="Sair"
                        onPress={() => setModalVisible(true)}
                        style={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    />
                </View>

            </View>
            <View style={{
                alignItems: 'center',
                marginTop: -25
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
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#BED5FF',
        borderWidth: 2,
        borderColor: '#E7BE29',
        borderRadius: 20,
        height: 189,
        width: 285,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        margin:8,
        padding: 10,
        elevation: 2,
        marginTop:15,
        width:87,
    },
    buttonOpen: {
        backgroundColor: '#7AC943',
    },
    buttonClose: {
        backgroundColor: '#EE5656',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        marginTop:-15,
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    },
});

export default Profile;