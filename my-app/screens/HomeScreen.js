import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Brightness from 'expo-brightness';
import * as Notifications from 'expo-notifications';
import * as Haptics from 'expo-haptics';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isMigraineMode, setIsMigraineMode] = useState(false);

  // Función para activar/desactivar las funciones solicitadas
  const handleFunctions = async () => {
    try {
      if (!isMigraineMode) {
        
        await Brightness.setBrightnessAsync(1.0);
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.NONE,
          sound: null,
        });
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        console.log('Modo migraña activado con éxito');
        
      } else {
        await Brightness.setBrightnessAsync(0.0);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        console.log('Modo migraña desactivado');
      }
      
      setIsMigraineMode(!isMigraineMode);
    } catch (error) {
      console.error('Error al manejar las funciones:', error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: '#131313' }]}>
      <Text style={[styles.title, { color: '#ECECEC' }]}>Migraine-Less</Text>

      <Text style={[styles.paragraph, { color: '#ECECEC' }]}>
        Press the left button to {isMigraineMode ? 'deactivate' : 'activate'} migraine mode, and the right button to get more information about migraine
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.Activetebutton} 
          onPress={handleFunctions}>
          <Text style={styles.buttonText}>
            {isMigraineMode ? 'Deactivate Functions' : 'Activate Functions'}
          </Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 30,
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
