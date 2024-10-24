import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Appearance } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Brightness from 'expo-brightness';
import * as Notifications from 'expo-notifications';
// Verifica si VolumeControl está disponible, pero no lo uses si es null
let VolumeControl;

try {
  VolumeControl = require('react-native-volume-control');
} catch (error) {
  console.error('react-native-volume-control no es compatible con Expo, o no está instalado correctamente.');
}

const HomeScreen = () => {
  const navigation = useNavigation();

  // Función para activar las funciones solicitadas
  const handleFunctions = async () => {
    try {
      // Cambiar brillo al mínimo
      await Brightness.setBrightnessAsync(0.0);

      // Cambiar volumen al 10% solo si VolumeControl está disponible
      if (VolumeControl && VolumeControl.change) {
        VolumeControl.change(0.1);
      } else {
        console.error('El control de volumen no está disponible.');
      }

      // Configurar notificaciones con prioridad baja
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.LOW,
      });

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
          onPress={() => navigation.navigate('Migraines Information')}>
          <Text style={styles.buttonText}>Migraine Information</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
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
