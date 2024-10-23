//AurasInfoScreen.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación

const NoAurasInfoScreen = () => {
    const navigation = useNavigation(); // Usa el hook para obtener el objeto de navegación


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        No Aura's Migraine
      </Text>

      <Text style={styles.paragraph}>
        Inserte el texto de esta migraña aqui c:
      </Text>


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
  paragraph: {
    fontSize: 16,  // ajusta el tamaño de la fuente
    lineHeight: 30,  // ajusta la altura de línea para un mejor espaciado
    color: '#fff',  // ajusta el color del texto
  },
});

export default NoAurasInfoScreen;
