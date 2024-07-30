import { Text, View, TextInput, Button, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

export const App = () => {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>RegistroXD</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
      />
      <Pressable style={styles.button} >
        <Text style={styles.buttonText}>Registrar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: 500,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderColor: '#333',
  },
  button: {
    backgroundColor: '#f00',
    width: 500,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
