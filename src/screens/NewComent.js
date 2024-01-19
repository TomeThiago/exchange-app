import { View, Text, Pressable, Image, TextInput, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import users from '../data/users';
import { useNavigation } from '@react-navigation/native'
import textCommentApps from '../data/textCommentApps';
import countries from '../data/countries';

export default props => {

    // save = () => {
    //     const newC = {

    //     }
    // }
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const save = () => {
        alert('Enviado com Sucesso');
    };
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(countries.map(country => ({ label: country.name, value: country.name})));

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
                justifyContent: 'center',

            }}>
                <View tyle={{
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        paddingVertical: 1,
                        fontSize: 25,
                        fontWeight: 800,
                        color: '#2264C7',
                    }}>Novo Comentário</Text>
                    <Pressable
                        onPress={() => navigation.navigate('Home')}>
                        <Image
                            source={require('./assets/arrow.png')}
                            style={{
                                height: 31,
                                width: 24,
                                position: "absolute",
                                left: -85,
                                top: -33
                            }}
                        />
                    </Pressable>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    paddingHorizontal: 15,
                }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 10, marginTop: 75 }}>Selecione o país</Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder=''
                    style={{ backgroundColor: '#F1F5F4', borderWidth: 1, borderRadius: 25, height: 39, borderColor: '#CACCCC' }}
                />
                {/* {value && (
                    <View style={{ marginTop: 20 }}>
                        <Text>ID: {countries.find(country => country.name === value)?.idPais}</Text>
                        <Text>Name: {value}</Text>
                    </View>
                )} */}
                <View style={{ flexDirection: 'column', justifyContent: "center" }}>
                    <View style={{
                        marginTop: 55,
                        borderColor: '#CACCCC',
                        backgroundColor: '#F1F5F4',
                        borderWidth: 1,
                        borderRadius: 15,
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingLeft: 22,
                        height: 181,
                        width: 354,
                        left: 4
                    }}>
                        <TextInput
                            placeholder='Escreva sobre...'
                            placeholderTextColor='#797B7A'
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', JustifyContent: 'space-between' }}>
                            <Pressable
                                style={[styles.buttonComent, styles.buttonClose]}
                                onPress={() => setModalVisible(true)}>
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.buttonComent, styles.buttonOpen]}
                                onPress={save}>
                                <Text style={styles.textStyle}>Enviar</Text>
                            </Pressable>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Está prestes a desistir do comentário </Text>
                                    <Text style={{ fontWeight: '800', fontSize: 24, color: '#2264C7' }}>Tem certeza? </Text>
                                    <View style={{ flexDirection: 'row', JustifyContent: 'space-between' }}>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => navigation.navigate('Home')}>
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
                    </View>
                </View>

            </View>
            <View style={{
                backgroundColor: '#BED5FF',
                width: '100%',
                height: 75,
                borderColor: '#BED5FF',
                borderWidth: 5,
                marginTop: 15,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',

            }}>
                <View tyle={{
                    justifyContent: 'center',
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
        margin: 8,
        padding: 10,
        elevation: 2,
        marginTop: 15,
        width: 87,
    },
    buttonComent: {
        borderRadius: 20,
        margin: 8,
        padding: 10,
        elevation: 2,
        marginTop: 15,
        width: 125,
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
        marginTop: -15,
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    },
});
