import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import React, { useState } from 'react';

const DocContacts = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isPressed2, setIsPressed2] = useState(false);
    const [isPressed3, setIsPressed3] = useState(false);
    const [isPressed4, setIsPressed4] = useState(false);
    const [isPressed5, setIsPressed5] = useState(false);
    const [isPressed6, setIsPressed6] = useState(false);
    const [isPressed7, setIsPressed7] = useState(false);
    const [isPressed8, setIsPressed8] = useState(false);
    const [isPressed9, setIsPressed9] = useState(false);
    const [isPressed10, setIsPressed10] = useState(false);
    const [isPressed11, setIsPressed11] = useState(false);
    const [isPressed12, setIsPressed12] = useState(false);
    const [isPressed13, setIsPressed13] = useState(false);
    const [isPressed14, setIsPressed14] = useState(false);

    const handleButtonPress = () => {
        setIsPressed(!isPressed); // Alterna o estado entre true e false
    };
    const handleButtonPress2 = () => {
        setIsPressed2(!isPressed2); // Alterna o estado entre true e false
    };
    const handleButtonPress3 = () => {
        setIsPressed3(!isPressed3); // Alterna o estado entre true e false
    };
    const handleButtonPress4 = () => {
        setIsPressed4(!isPressed4); // Alterna o estado entre true e false
    };
    const handleButtonPress5 = () => {
        setIsPressed5(!isPressed5); // Alterna o estado entre true e false
    };
    const handleButtonPress6 = () => {
        setIsPressed6(!isPressed6); // Alterna o estado entre true e false
    };
    const handleButtonPress7 = () => {
        setIsPressed7(!isPressed7); // Alterna o estado entre true e false
    };
    const handleButtonPress8 = () => {
        setIsPressed8(!isPressed8); // Alterna o estado entre true e false
    };
    const handleButtonPress9 = () => {
        setIsPressed9(!isPressed9); // Alterna o estado entre true e false
    };
    const handleButtonPress10 = () => {
        setIsPressed10(!isPressed10); // Alterna o estado entre true e false
    };
    const handleButtonPress11 = () => {
        setIsPressed11(!isPressed11); // Alterna o estado entre true e false
    };
    const handleButtonPress12 = () => {
        setIsPressed12(!isPressed12); // Alterna o estado entre true e false
    };
    const handleButtonPress13 = () => {
        setIsPressed13(!isPressed13); // Alterna o estado entre true e false
    };
    const handleButtonPress14 = () => {
        setIsPressed14(!isPressed14); // Alterna o estado entre true e false
    };
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
                    onPress={() => navigation.navigate('Visa')}>
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

                    }}>Contatos</Text>
                </View>


            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 20, marginBottom: 3 }}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image
                        source={require('./assets/filter.png')}
                        style={{
                            height: 35,
                            width: 35,
                        }}
                    /></TouchableOpacity>
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <ScrollView horizontal={false} style={{ height: 179}}>         
                                        <View style={{ width: 247, height: 179, backgroundColor: 'white', flexDirection: 'column' }}>
                                            <View style={{ borderColor: 'black', width: 210, height: 44, justifyContent: 'center', borderBottomWidth: 1 }}>
                                                <Text style={{ fontSize: 16, marginLeft: 15 }}>Portugal</Text>
                                            </View>
                                            <View style={{ borderColor: 'black', width: 210, height: 44, justifyContent: 'center', borderBottomWidth: 1 }}>
                                                <Text style={{ fontSize: 16, marginLeft: 15 }}>França</Text>
                                            </View>
                                            <View style={{ borderColor: 'black', width: 210, height: 44, justifyContent: 'center', borderBottomWidth: 1 }}>
                                                <Text style={{ fontSize: 16, marginLeft: 15 }}>Espanha</Text>
                                            </View>
                                            <View style={{ borderColor: 'black', width: 210, height: 44, justifyContent: 'center'}}>
                                                <Text style={{ fontSize: 16, marginLeft: 15 }}>Itália</Text>
                                            </View>
                                        </View>
                                </ScrollView>
                                <View style={{ flexDirection: 'row', JustifyContent: 'space-between' }}>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Voltar</Text>
                                    </Pressable>
                                    <Pressable
                                        style={[styles.button, styles.buttonOpen]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Ok</Text>
                                    </Pressable>
                                </View>

                            </View>
                        </View>
                    </Modal>
                </View>

            </View>
            <ScrollView horizontal={false} style={{ height: 400 }}>
                <View style={{ width: 'auto', height: 'auto', flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', width: 'auto', height: 100, alignItems: 'center' }}>
                        <Image
                            source={require('./assets/imgPlaceHolder.png')}
                            style={{
                                height: 60,
                                width: 64,
                                margin: 20
                            }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>User1</Text>
                            <Text style={{ color: 'black' }}>Lorem Ipsum has been the industry's {"\n"}standard dummy text Lorem ipsum dolor {"\n"}sit amet, consectetur nostrud</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 }}>
                                <TouchableOpacity onPress={handleButtonPress}>
                                    <Image
                                        source={isPressed ? require('./assets/like.png') : require('./assets/whiteHeart.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleButtonPress2}>
                                    <Image
                                        source={isPressed2 ? require('./assets/atention.png') : require('./assets/whiteAtention.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: 'auto', height: 100, alignItems: 'center' }}>
                        <Image
                            source={require('./assets/imgPlaceHolder.png')}
                            style={{
                                height: 60,
                                width: 64,
                                margin: 20
                            }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>User1</Text>
                            <Text style={{ color: 'black' }}>Lorem Ipsum has been the industry's {"\n"}standard dummy text Lorem ipsum dolor {"\n"}sit amet, consectetur nostrud</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 }}>
                                <TouchableOpacity onPress={handleButtonPress3}>
                                    <Image
                                        source={isPressed3 ? require('./assets/like.png') : require('./assets/whiteHeart.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleButtonPress4}>
                                    <Image
                                        source={isPressed4 ? require('./assets/atention.png') : require('./assets/whiteAtention.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: 'auto', height: 100, alignItems: 'center' }}>
                        <Image
                            source={require('./assets/imgPlaceHolder.png')}
                            style={{
                                height: 60,
                                width: 64,
                                margin: 20
                            }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>User1</Text>
                            <Text style={{ color: 'black' }}>Lorem Ipsum has been the industry's {"\n"}standard dummy text Lorem ipsum dolor {"\n"}sit amet, consectetur nostrud</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 }}>
                                <TouchableOpacity onPress={handleButtonPress5}>
                                    <Image
                                        source={isPressed5 ? require('./assets/like.png') : require('./assets/whiteHeart.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleButtonPress6}>
                                    <Image
                                        source={isPressed6 ? require('./assets/atention.png') : require('./assets/whiteAtention.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: 'auto', height: 100, alignItems: 'center' }}>
                        <Image
                            source={require('./assets/imgPlaceHolder.png')}
                            style={{
                                height: 60,
                                width: 64,
                                margin: 20
                            }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>User1</Text>
                            <Text style={{ color: 'black' }}>Lorem Ipsum has been the industry's {"\n"}standard dummy text Lorem ipsum dolor {"\n"}sit amet, consectetur nostrud</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 }}>
                                <TouchableOpacity onPress={handleButtonPress7}>
                                    <Image
                                        source={isPressed7 ? require('./assets/like.png') : require('./assets/whiteHeart.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleButtonPress8}>
                                    <Image
                                        source={isPressed8 ? require('./assets/atention.png') : require('./assets/whiteAtention.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: 'auto', height: 100, alignItems: 'center' }}>
                        <Image
                            source={require('./assets/imgPlaceHolder.png')}
                            style={{
                                height: 60,
                                width: 64,
                                margin: 20
                            }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>User1</Text>
                            <Text style={{ color: 'black' }}>Lorem Ipsum has been the industry's {"\n"}standard dummy text Lorem ipsum dolor {"\n"}sit amet, consectetur nostrud</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 }}>
                                <TouchableOpacity onPress={handleButtonPress9}>
                                    <Image
                                        source={isPressed9 ? require('./assets/like.png') : require('./assets/whiteHeart.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleButtonPress10}>
                                    <Image
                                        source={isPressed10 ? require('./assets/atention.png') : require('./assets/whiteAtention.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: 'auto', height: 100, alignItems: 'center' }}>
                        <Image
                            source={require('./assets/imgPlaceHolder.png')}
                            style={{
                                height: 60,
                                width: 64,
                                margin: 20
                            }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>User1</Text>
                            <Text style={{ color: 'black' }}>Lorem Ipsum has been the industry's {"\n"}standard dummy text Lorem ipsum dolor {"\n"}sit amet, consectetur nostrud</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 }}>
                                <TouchableOpacity onPress={handleButtonPress11}>
                                    <Image
                                        source={isPressed11 ? require('./assets/like.png') : require('./assets/whiteHeart.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleButtonPress12}>
                                    <Image
                                        source={isPressed12 ? require('./assets/atention.png') : require('./assets/whiteAtention.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: 'auto', height: 100, alignItems: 'center' }}>
                        <Image
                            source={require('./assets/imgPlaceHolder.png')}
                            style={{
                                height: 60,
                                width: 64,
                                margin: 20
                            }}
                        />
                        <View style={{ flexDirection: 'column', flex:1 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>User1</Text>
                            <Text style={{ color: 'black' }}>Lorem Ipsum has been the industry's {"\n"}standard dummy text Lorem ipsum dolor {"\n"}sit amet, consectetur nostrud</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 }}>
                                <TouchableOpacity onPress={handleButtonPress13}>
                                    <Image
                                        source={isPressed13 ? require('./assets/like.png') : require('./assets/whiteHeart.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleButtonPress14}>
                                    <Image
                                        source={isPressed14 ? require('./assets/atention.png') : require('./assets/whiteAtention.png')}
                                        style={{
                                            height: 22,
                                            width: 22,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <View style={{
                    width: "90%",
                    height: 48,
                    marginTop: 101,
                    marginBottom: 10,
                    borderColor: '#CACCCC',
                    backgroundColor: '#F1F5F4',
                    borderWidth: 1,
                    borderRadius: 15,
                    alignItems: "flex-start",
                    justifyContent: "center",

                }}>
                    <Pressable onPress={() => navigation.navigate('NewComent')}>
                        <Text style={{ marginLeft: 20 }}>Escreva sobre...</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{
                backgroundColor: '#BED5FF',
                width: '100%',
                height: 75,
                borderColor: '#BED5FF',
                borderWidth: 5,
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
        height: 315,
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


export default DocContacts;