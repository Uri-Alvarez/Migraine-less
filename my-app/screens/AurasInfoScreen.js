//AurasInfoScreen.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación

const AurasInfoScreen = () => {
    const navigation = useNavigation(); // Usa el hook para obtener el objeto de navegación


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the type of migraine you want to relieve</Text>

      {/* QUITAR EL BOTON Y PONER PARRAFOS PARA LA INFO */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Activate Functions</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

// Estilos personalizados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e4e66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },

  //PARRAFOS DE TEXTO CON INFO
});

export default AurasInfoScreen;
