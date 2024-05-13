import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {usuarios} from "./lista_usuario"
import { useNavigation } from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [correo, setCorreo] = React.useState('');
  const [password, setPassword] = React.useState('');

// console.log(usuarios)

  const handleLogin = () => {
    const usuarioEncontrado = usuarios.find(
        user => user.nombre === username  && user.correo === correo && user.contraseña === password
      );
  
      if (usuarioEncontrado) {
        alert('Usuario logeado');
        navigation.navigate('Logeado', { username: usuarioEncontrado.nombre });
      } else {
        alert('Usuario o contraseña incorrectos');
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre de usuario:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Ingrese su nombre de usuario"
      />

      <Text style={styles.label}>Correo:</Text>
      <TextInput
        style={styles.input}
        value={correo}
        onChangeText={setCorreo}
        placeholder="Ingrese su correo"
      />

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Ingrese su contraseña"
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 3,
    margin:60,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Login;
