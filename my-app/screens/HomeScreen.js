import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación

const HomeScreen = () => {
  const navigation = useNavigation(); // Obtiene la función de navegación

  //Pedir el backend para que se activen las funciones
  const handleFunctions = () => {
    //BACKEND PARA QUE EL BOTON DE "ACTIVAR FUNCIONES" ACTIVE LAS FUNCIONES
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the type of migraine you want to relieve</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleFunctions}>
          <Text style={styles.buttonText}>Activate Functions</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Migraines Information')} // Navega a Migraine2
        >
          <Text style={styles.buttonText}>Migraine Information</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos siguen igual...
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
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  button: {
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
