// Importa las dependencias necesarias de React y React Native.
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación

// Componente funcional que representa el formulario para crear una cuenta.
const CreateAccountScreen = ({ navigation }) => {
  // Estados para almacenar los valores del formulario.
  const [name, setName] = useState(''); // Estado para el nombre.
  const [age, setAge] = useState(''); // Estado para la edad.
  const [gender, setGender] = useState(''); // Estado para el sexo.
  const [email, setEmail] = useState(''); // Estado para el correo.
  const [password, setPassword] = useState(''); // Estado para la contraseña.
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña.

  // Función que maneja el evento de creación de cuenta.
  const handleCreateAccount = () => {
    // Aquí va la lógica del backend para guardar los datos del usuario en la base de datos.
    console.log({
      name,
      age,
      gender,
      email,
      password,
    });
    // Después de guardar los datos, navega a la pantalla de inicio.
    navigation.navigate('Home');
  };

  // Renderiza el formulario de creación de cuenta.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      {/* Input para el nombre */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name..."
        placeholderTextColor="#a6a6a6" // Texto de marcador de posición en gris claro
        value={name} // Valor del input de nombre
        onChangeText={setName} // Actualiza el estado del nombre cuando el texto cambia
      />

      {/* Input para la edad */}
      <TextInput
        style={styles.input}
        placeholder="Enter your age..."
        placeholderTextColor="#a6a6a6" // Texto de marcador de posición en gris claro
        value={age} // Valor del input de edad
        onChangeText={setAge} // Actualiza el estado de la edad cuando el texto cambia
        keyboardType="numeric" // Teclado numérico para la edad
      />

      {/* Input para el correo electrónico */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email..."
        placeholderTextColor="#a6a6a6" // Texto de marcador de posición en gris claro
        value={email} // Valor del input de correo
        onChangeText={setEmail} // Actualiza el estado del correo cuando el texto cambia
        keyboardType="email-address" // Teclado especializado en correos electrónicos
      />

      {/* Input para la contraseña */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Enter your password..."
          placeholderTextColor="#a6a6a6" // Texto de marcador de posición en gris claro
          secureTextEntry={!showPassword} // Define si el texto de entrada es seguro según el estado de visibilidad
          value={password} // Valor del input de contraseña
          onChangeText={setPassword} // Actualiza el estado de la contraseña cuando el texto cambia
        />

        {/* Botón para mostrar/ocultar la contraseña */}
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)} // Cambia el estado de visibilidad al presionar
        >
          <Text style={styles.eyeText}>{showPassword ? '👁️' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      {/* Botón para ver aviso de privacidad */}
      <TouchableOpacity style={styles.CheckButton} onPress={() => navigation.navigate('Politicas de Privacidad')}>
        <Text style={styles.CheckButtonText}>Politicas de Privacidad</Text>
      </TouchableOpacity>

      {/* Botón para crear la cuenta */}
      <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
        <Text style={styles.createButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

// Definición de estilos para la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1, // Permite que el contenedor ocupe todo el espacio disponible
    backgroundColor: '#131313', // Fondo negro o gris oscuro
    alignItems: 'center', // Centra los elementos horizontalmente
    justifyContent: 'center', // Centra los elementos verticalmente
    paddingHorizontal: 20, // Espaciado horizontal interno
  },
  title: {
    fontSize: 32, // Tamaño de la fuente para el título
    color: '#fff', // Color blanco para el texto
    fontWeight: 'bold', // Establece el peso de la fuente en negrita
    marginBottom: 20, // Espacio inferior del título
  },
  input: {
    width: '100%', // Ancho del input al 100%
    backgroundColor: '#2a2a2a', // Fondo gris oscuro para los inputs
    color: '#fff', // Texto blanco
    padding: 15, // Espaciado interno
    borderRadius: 10, // Esquinas redondeadas
    marginBottom: 15, // Espacio inferior entre inputs
  },
  passwordContainer: {
    width: '100%', // Ancho del contenedor al 100%
    flexDirection: 'row', // Dispone los elementos en fila
    alignItems: 'center', // Centra los elementos verticalmente
    backgroundColor: '#2a2a2a', // Mismo fondo gris oscuro
    borderRadius: 10, // Esquinas redondeadas
    marginBottom: 15, // Espacio inferior entre campos
  },
  inputPassword: {
    flex: 1, // Permite que el campo de entrada de contraseña ocupe todo el espacio disponible
    color: '#fff', // Texto blanco
    padding: 15, // Espaciado interno
  },
  eyeIcon: {
    padding: 10, // Espaciado interno para el icono del ojo
  },
  eyeText: {
    color: '#8c52ff', // Color morado claro para el icono del ojo
  },
  createButton: {
    backgroundColor: '#8c52ff', // Fondo morado púrpura para el botón
    paddingVertical: 15, // Espaciado vertical interno
    paddingHorizontal: 100, // Espaciado horizontal interno
    borderRadius: 10, // Esquinas redondeadas
    marginTop: 20, // Espacio superior del botón
  },
  createButtonText: {
    color: '#fff', // Texto blanco para el botón
    fontWeight: 'bold', // Establece el peso de la fuente en negrita
    fontSize: 16, // Tamaño de la fuente para el texto del botón
  },
  CheckButton: {
    backgroundColor: '#8c52ff', // Fondo morado púrpura para el botón
    paddingVertical: 15, // Espaciado vertical interno
    paddingHorizontal: 100, // Espaciado horizontal interno
    borderRadius: 10, // Esquinas redondeadas
    marginBottom: 15, // Espacio inferior del botón
  },
  CheckButtonText: {
    color: '#fff', // Texto blanco para el botón
    fontWeight: 'bold', // Establece el peso de la fuente en negrita
    fontSize: 16, // Tamaño de la fuente para el texto del botón
  },
});

// Exporta el componente CreateAccountScreen para que pueda ser utilizado en otras partes de la aplicación.
export default CreateAccountScreen;
