import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking'; // Importa Linking para manejar enlaces

// Función que se ejecutará al presionar el botón de llamada de emergencia
const handleEmergencyCall = () => {
  const emergencyNumber = 'tel:+1234567890'; // Número de emergencia
  Linking.openURL(emergencyNumber).catch((err) =>
    console.error('Error al abrir la llamada de emergencia:', err)
  );
};

const AurasInfoScreen = () => {
  const navigation = useNavigation(); // Usa el hook para obtener el objeto de navegación

  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>

        {/* Botón de llamada */}
        <TouchableOpacity 
          style={styles.PhoneButton} 
          onPress={handleEmergencyCall}>
          <Text style={styles.PhoneButtonText}>SOS</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>
          Nombre:
        </Text>

        <Text style={styles.paragraph}>
          Aqui van los datos de la Base de Datos
        </Text>
        
        <Text style={styles.subtitle}>
          Parentesco:
        </Text>

        <Text style={styles.paragraph}>
          Aqui van los datos de la Base de Datos
        </Text>

        <Text style={styles.subtitle}>
          Número:
        </Text>

        <Text style={styles.paragraph}>
          Aqui van los datos de la Base de Datos
        </Text>

        {/* Botón para regresar al Home */}
        <TouchableOpacity 
          style={styles.BackButton} 
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.BackButtonText}>Regresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos personalizados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 15,
    color: 'white',
    marginBottom: 4,
    marginTop: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 30,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  PhoneButton: {
    backgroundColor: 'red',
    padding: 100,
    borderRadius: 350,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  PhoneButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
  },
  BackButton: {
    backgroundColor: '#8c52ff',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 35,
  },
  BackButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AurasInfoScreen;