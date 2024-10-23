import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación

const InformationScreen = () => {
    const navigation = useNavigation(); // Usa el hook para obtener el objeto de navegación

    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            This is a little explanation for every migraine.
            Please chosse one.
          </Text>
    
          {/* Contenedor para el botón de Auras Migraine */}
          <View style={styles.AurasbuttonContainer}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('Auras Migraine')} // Mueve onPress aquí
            >
              <Text style={styles.buttonText}>Auras Migraine</Text>
            </TouchableOpacity>
          </View>
    
          {/* Contenedor para el botón de No Auras Migraine */}
          <View style={styles.NoAurasbuttonContainer}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('No Auras Migraine')} // Mueve onPress aquí
            >
              <Text style={styles.buttonText}>No Auras Migraine</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

// Estilos personalizados
const styles = StyleSheet.create({
  container: {
    flex: 1, // Permite que el contenedor ocupe todo el espacio disponible
    backgroundColor: '#131313', // Establece un fondo negro o gris oscuro
    alignItems: 'center', // Centra los elementos horizontalmente
    justifyContent: 'center', // Centra los elementos verticalmente
    paddingHorizontal: 20, // Espaciado horizontal interno
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  AurasbuttonContainer: {
    flexDirection: 'row', // Organiza los botones en una fila
    flexWrap: 'wrap', // Permite que los botones se envuelvan en una nueva línea si es necesario
    justifyContent: 'space-around',
  },
  NoAurasbuttonContainer: {
    flexDirection: 'row', // Organiza los botones en una fila
    flexWrap: 'wrap', // Permite que los botones se envuelvan en una nueva línea si es necesario
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#4522b9',
    borderRadius: 10, // Bordes redondeados para parecer ventanas
    padding: 20,
    margin: 10,
    width: 120, // Tamaño de cada "ventana"
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Sombra para dar efecto de ventana
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default InformationScreen;
