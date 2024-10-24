import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Brightness from 'expo-brightness';
import * as Notifications from 'expo-notifications';
import { Audio } from 'expo-av';
import { Appearance } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  //Pedir el backend para que se activen las funciones
  const handleFunctions = async () => {
    try {
      
      await Brightness.setBrightnessAsync(0.1);

      const soundObject = new Audio.Sound();
      await soundObject.setVolumeAsync(0.0);

      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.LOW, // Baja prioridad para silenciar
      });

      
      Appearance.setColorScheme('dark');
      
      console.log('Funciones activadas con éxito');
    } catch (error) {
      console.error('Error al activar las funciones:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Migraine-Less</Text>

      <Text style={styles.paragraph}>
        Press the left button to activate migraine mode, and the right button to get more information about migraine.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.Activetebutton} 
          onPress={handleFunctions}>
          <Text style={styles.buttonText}>Activate Functions</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.Infobutton} 
          onPress={() => navigation.navigate('Migraines Information')} // Navega a Migraine2
        >
          <Text style={styles.buttonText}>Migraine Information</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Permite que el contenedor ocupe todo el espacio disponible
    backgroundColor: '#131313', // Establece un fondo negro o gris oscuro
    alignItems: 'center', // Centra los elementos horizontalmente
    justifyContent: 'center', // Centra los elementos verticalmente
    paddingHorizontal: 20, // Espaciado horizontal interno
  },
  title: {
    fontSize: 32, // Tamaño de la fuente para el título
    color: '#fff', // Color blanco para el texto
    fontWeight: 'bold', // Establece el peso de la fuente en negrita
    marginBottom: 10, // Espacio inferior del título
  },
  paragraph: {
    fontSize: 16,  // ajusta el tamaño de la fuente
    lineHeight: 30,  // ajusta la altura de línea para un mejor espaciado
    color: '#fff',  // ajusta el color del texto
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  Activetebutton: {
    backgroundColor: '#4522b9',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  Infobutton: {
    backgroundColor: '#4522b9',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
