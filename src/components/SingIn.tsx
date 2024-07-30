import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

type FormGroupProps = {
  id: string;
  label: string;
  type?: 'default' | 'email' | 'password';
  errors?: { [key: string]: { message: string } };
};

const FormGroup: React.FC<FormGroupProps> = ({ id, label, type = 'default', errors = {} }) => (
  <View style={styles.formGroup}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      id={id}
      style={[styles.input, errors[id] && styles.inputError]}
      secureTextEntry={type === 'password'}
    />
    {errors[id] && (
      <Text style={styles.errorMessage}>{errors[id].message}</Text>
    )}
  </View>
);

const SingIn: React.FC = () => {
  const errors: { [key: string]: { message: string } } = {}; // Simulación de errores para los campos

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.gridArea}>
        <View style={styles.welcome}>
          <Text style={styles.infoTitle}><Image style={styles.image} source={require('./assets/img/images.png')} /> Bienvenido</Text>
          <Text style={styles.welcomeText}>
            welcome
          </Text>
          <TouchableOpacity>
            <Text style={styles.redirectText}>
              ¿No tienes cuenta?{' '}
              <Text style={styles.linkForms}>Regístrate</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formLogin}>
          <Text style={styles.infoTitle}>Inicio de Sesión</Text>
          <FormGroup
            id="email"
            label="Correo Electrónico"
            type="email"
            errors={errors}
          />
          <FormGroup
            id="password"
            label="Contraseña"
            type="password"
            errors={errors}
          />
          <Button title="Iniciar Sesión" onPress={() => {}} />
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
    maxWidth: 1000,
    height: 600,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  welcome: {
    flex: 1,
    padding: 20,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    height: 50,
    textAlignVertical: 'center',
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: '100%',
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 20,
  },
  redirectText: {
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
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
  },
});

export default SingIn;
