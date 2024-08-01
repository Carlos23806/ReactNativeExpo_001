import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';


const SingIn: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.gridArea}>
        <View style={styles.formLogin}>
          <Text style={styles.infoTitle}>Inicio de Sesión</Text>
          <TextInput
            id="email"
            style={styles.input}
            placeholder="Correo Electrónico"
          />
          <TextInput
            id="password"
            style={styles.input}
            placeholder="Contraseña"
          />
          <TextInput
            id="password"
            style={styles.input}
            placeholder="Confirmar Contraseña"
          />
          <TouchableOpacity style={styles.button}>Iniciar Sesión</TouchableOpacity>
          <TouchableOpacity style={styles.redirect}>¿No tienes cuenta?</TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  gridArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
    height: 500,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    height: 50,
    textAlignVertical: 'center',
  },
  redirect: {
    fontSize: 16,
    color: '#1e90ff',
  },
  linkForms: {
    textDecorationLine: 'underline',
  },
  formLogin: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',  
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    margin: 10,
  },
  button: {
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
});

export default SingIn;
