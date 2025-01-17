import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Portfolio from './src/components/Portafolio';
import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/img/Fondo.gif')}  style={styles.imageBackground}>
      <View style={styles.container}>
        <Image
          source={require('./assets/img/images.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>Hola Bienvenidos</Text>
        <Text style={styles.InfosText}>
          Mi nombre es Carlos Martinez y soy desarrollador web
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.text}>Registrate Para ver mi Portafolio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.signInButton}>
          <Text style={styles.signInText}>Ya tengo una cuenta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 500,
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF50',
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: '#FFFFFF80', 
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    height: 50,
    textAlignVertical: 'center',
    color: '#FFFFFF',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  InfosText: {
    width: '60%',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  text: {
    fontSize: 16,
    color: '#00698F',
    borderBottomWidth: 1,
    borderBottomColor: '#00698F',
    textShadowColor: '#00415D',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 20,
  },
  signInButton: {
    marginTop: 20,
  },
  signInText: {
    fontSize: 16,
    color: '#00698F',
    textShadowColor: '#00415D',
    borderBottomWidth: 1,
    borderBottomColor: '#00698F',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});

export default App;