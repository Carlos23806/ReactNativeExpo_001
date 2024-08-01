import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import Portfolio from "./src/components/Portafolio";
import SignIn from "./src/components/SignIn";
import SignUp from "./src/components/SignUp";

const App = () => {
  return (
    <ImageBackground source={require("./assets/img/Fondo.gif")} resizeMode="cover" style={styles.imageBackground}>
      <View style={styles.container}>
        <Image
          source={require("./assets/img/images.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Hola Bienvenidos</Text>
        <Text style={styles.InfosText}>
          Mi nombre es Carlos Martinez y soy desarrollador web
        </Text>
        <Text style={styles.text}>Registrate Para ver mi Portafolio</Text>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 500,
    borderRadius: 10,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF99",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
    height: 50,
    textAlignVertical: "center",
    color: "#FFFFFF",
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  InfosText: {
    width: "60%",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  text: {
    fontSize: 16,
    color: "#FC7200",
    borderBottomWidth: 1,
    borderBottomColor: "#FC7200",
    textShadowColor: "#FC7200",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});

export default App;
