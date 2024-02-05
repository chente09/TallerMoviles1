import React, { useState } from 'react'
import { Alert, Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
export const HomeScreen = () => {
  const imagen = { uri: 'https://res.cloudinary.com/dkd6jfzee/image/upload/v1707105837/ATENCION_js06mj.png' };
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <ImageBackground source={imagen} resizeMode="cover" style={styles.image}>
        <View style={styles.container2}>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={setUsuario}
              placeholder="USUARIO"
              value={usuario}
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              placeholder="CONTRASEÑA"
              value={password}
            />
          </SafeAreaView>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('AÚN NO FUNCIONO')}>
            <Text style={styles.textBtn}>INICIAR SESIÓN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('AÚN NO FUNCIONO')}>
            <Text style={styles.textBtn}>REGÍSTRATE</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'stretch',
    position: 'absolute',
    left: '2%',
    right: '2%',
    top: '15%'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 10,
    padding: 10,
    width: 300,
    alignSelf: 'center'
  },
  textBtn:{
    color:'black',
    fontSize:22,
  },
  input: {
    backgroundColor: 'white',
    color:'black',
    fontSize:22,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
})