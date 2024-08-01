import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const Portfolio = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/img/React.png')} // Fuente vacía como se solicitó
          style={styles.logo}
        />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Datos de Usuario</Text>
        <Text style={styles.containerText}><Text style={styles.infoText}>Nombre:</Text> <Text style={styles.InfosText}>Carlos Martinez</Text></Text>
        <Text style={styles.containerText}><Text style={styles.infoText}>Edad:</Text> <Text style={styles.InfosText}> 17</Text></Text>
        <Text style={styles.containerText}><Text style={styles.infoText}>Teléfono:</Text> <Text style={styles.InfosText}> 3247022893</Text></Text>
        <Text style={styles.containerText}><Text style={styles.infoText}>Email:</Text> <Text style={styles.InfosText}> camartinez@soy.sena.edu.co</Text></Text>
        <Text style={styles.containerText}><Text style={styles.infoText}>Dirección:</Text> <Text style={styles.InfosText}> Calle 13a #14-04</Text></Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perfil Laboral</Text>
        <Text style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pariatur esse quod id suscipit, officia debitis voluptas ad laudantium at minima. Illum voluptates ad nihil voluptatibus necessitatibus illo accusamus nemo excepturi perferendis!</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {[
            { name: 'Html', years: 12 },
            { name: 'Css', years: 12 },
            { name: 'JavaScript', years: 12 },
            { name: 'Php', years: 12 },
            { name: 'Ionic', years: 6 },
            { name: 'Mysql', years: 10 },
          ].map((skill) => (
            <View style={styles.skillItem}>
              <Text style={styles.skillText}>{skill.name}</Text>
              <Text style={styles.skillText}>{skill.years}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Otros</Text>
        <Text style={styles.infoText}>Sigue mi Portafolio para mas información</Text>
        <Text style={styles.infoText}>Carlos.protafolioweb</Text>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  section: {
    margin: 10,
    padding: 15,
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
  },
  sectionTitle: {
    backgroundColor: "#00b9ff",
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    width: '100%',
    textAlign: 'center',
  },
  containerText:{
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  infoText: {
    fontSize: 14,
    color: "#000000",
    width: "100%",
    textAlign: "center",
  },
  InfosText:{
    width:"100%",
    textAlign: "center",
  },
  skillsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  skillItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    width: "200%",
  },
  skillText: {
    fontSize: 14,
    color: "#000000",
  },
});

export default Portfolio;
