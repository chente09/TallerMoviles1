import React, { useState } from 'react'
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const InterfazBusquedaScreen = () => {
    const [name, setName] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [cedula, setCedula] = useState('');
    const [celular, setCelular] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://res.cloudinary.com/dkd6jfzee/image/upload/v1707113175/Dise%C3%B1o_sin_t%C3%ADtulo_cxxwog.png',
                    }}
                />
            </View>
            <Text style={styles.title}>
                GESTIUM Servicios Legales Integrales
                - CONSULTA DE PROCESOS JUDICIALES ELECTRÓNICOS
            </Text>
            <View style={styles.container3}>
                <SafeAreaView>
                    <Text style={styles.textInput}>Busqueda Avanzada</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        placeholder="Número de proceso"
                        value={name}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setApellidos}
                        placeholder="Buscar por numero de cédula"
                        value={apellidos}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setCedula}
                        placeholder="Buscar por nombre"
                        value={cedula}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setCelular}
                        placeholder="Buscar por número de celular"
                        value={celular}
                        keyboardType="numeric"
                    />
                </SafeAreaView>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('AÚN NO FUNCIONO')}>
                    <Text style={styles.textBtn}>BUSCAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('AÚN NO FUNCIONO')}>
                    <Text style={styles.textBtn}>LIMPIAR</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex:1,
        marginTop:'10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container3: {
        flex:7,
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    title: {
        top:'5%',
        fontSize: 18,
        color: 'black',
        textAlign: 'center',

    },
    input: {
        backgroundColor: 'white',
        color:'black',
        fontSize:20,
        height: 40,
        margin: 9,
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
    },
    textInput:{
        fontSize: 20,
        fontStyle:'italic',
        color: 'black', 
        paddingLeft: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 9,
        borderWidth: 5,
        padding: 10,
        width: 300,
        alignSelf: 'center',
      },
      textBtn:{
        color:'black',
        fontSize:22,
      },
    
})
