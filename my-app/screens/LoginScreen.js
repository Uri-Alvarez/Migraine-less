// Importa las librerías necesarias de React y React Native
import React, { useState } from 'react'; // Importa React y el hook useState
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'; // Importa componentes de React Native

// Inicia la definición del componente funcional LoginScreen
const LoginScreen = ({ navigation }) => {
  // Declara el estado para almacenar el email y la contraseña
  const [email, setEmail] = useState(''); // Estado para el correo electrónico, inicializado como cadena vacía
  const [password, setPassword] = useState(''); // Estado para la contraseña, inicializado como cadena vacía
  const [showPassword, setShowPassword] = useState(false); // Inicializa el estado de visibilidad de la contraseña como falso.

  // Función que se ejecuta al presionar el botón de login
  //Para backend
  const handleLogin = () => {
    // Aquí se añade la lógica de autenticación
    console.log('Email:', email, 'Password:', password); // Imprime el correo y la contraseña en la consola
    // Navega a la pantalla principal si el login es exitoso
    navigation.navigate('Home'); // Redirige a la pantalla "Home"
  };

  // Renderiza el componente
  return (
    // Inicia el contenedor principal del componente
    <View style={styles.container}>
      
      {/* Título de bienvenida */}
      <Text style={styles.title}>Welcome</Text> 

      {/* Subtítulo de instrucción */}
      <Text style={styles.subtitle}>Login to access your account below.</Text>

      {/* Input para el correo electrónico */}
      <TextInput
        style={styles.input} // Estilo aplicado al campo de entrada
        placeholder="Enter your email..." // Texto de marcador de posición
        placeholderTextColor="#a6a6a6" // Color del texto del marcador de posición en gris claro
        value={email} // Valor del campo de entrada que se enlaza al estado del email
        onChangeText={setEmail} // Actualiza el estado del email cuando el texto cambia
      />{/* Fin de input Correo*/}

      {/* Input para la contraseña */}
      <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input} // Aplica estilos al input
        placeholder="Enter your password..." // Texto de marcador de posición
        placeholderTextColor="#a6a6a6" // Color del texto del marcador de posición en gris claro
        secureTextEntry={!showPassword} // Define si el texto de entrada es seguro según el estado de visibilidad
        value={password} // Valor del campo de entrada que se enlaza al estado de la contraseña
        onChangeText={setPassword} // Actualiza el estado password al cambiar el texto
      />{/* Fin de input Password*/}
      
      <TouchableOpacity
          style={styles.eyeIcon} // Estilo del botón del icono del ojo
          onPress={() => setShowPassword(!showPassword)} // Cambia el estado de visibilidad al presionar
        >
          <Text style={styles.eyeText}>{showPassword ? '👁️' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      {/* Botón para hacer login */}
    <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

    {/* Texto para crear una nueva cuenta */}
    <Text style={styles.createAccountText}>
        Don't have an account?{' '}
        <Text style={styles.createLink} 
        onPress={() => navigation.navigate('Create')}>
          Create
        </Text>
      </Text>

      {/* Botón para continuar como invitado */}
      <TouchableOpacity 
        style={styles.guestButton} 
        onPress={() => navigation.navigate('Home')} // Navega a la pantalla de "Home" al presionar
      >
        <Text style={styles.guestButtonText}>Continue as Guest</Text>
      </TouchableOpacity>

    </View>
  );
}; // Fin de la definición del componente LoginScreen

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
  subtitle: {
    fontSize: 14, // Tamaño de la fuente para el subtítulo
    color: '#a6a6a6', // Color gris claro para el texto
    marginBottom: 30, // Espacio inferior del subtítulo
  },
  input: {
    width: '85%', // Ancho del campo de entrada al 100%
    backgroundColor: '#2a2a2a', // Fondo gris oscuro para los inputs
    color: '#fff', // Texto blanco
    padding: 10, // Espaciado interno
    borderRadius: 10, // Esquinas redondeadas
    marginBottom: 15, // Espacio inferior entre los campos de entrada
    //marginRight: .01,
  },
  passwordContainer: {
    width: '85%', // Ancho del contenedor al 100%
    flexDirection: 'row', // Dispone los elementos en fila
    alignItems: 'center', // Centra los elementos verticalmente
    backgroundColor: '#2a2a2a', // Mismo fondo gris oscuro
    borderRadius: 10, // Esquinas redondeadas
    marginBottom: 15, // Espacio inferior entre campos
    //marginRight: .01,
  },
  inputPassword: {
    flex: 1, // Permite que el campo de entrada de contraseña ocupe todo el espacio disponible
    color: '#fff', // Texto blanco
    padding: 10, // Espaciado interno
  },
  eyeIcon: {
    padding: 1, // Espaciado interno para el icono del ojo
  },
  eyeText: {
    color: '#8c52ff', // Color morado claro para el icono del ojo
  },
  loginButton: {
    backgroundColor: '#8c52ff', // Fondo morado púrpura para el botón
    paddingVertical: 15, // Espaciado vertical interno
    paddingHorizontal: 100, // Espaciado horizontal interno
    borderRadius: 10, // Esquinas redondeadas
    marginBottom: 15, // Espacio inferior del botón
  },
  loginButtonText: {
    color: '#fff', // Texto blanco para el botón
    fontWeight: 'bold', // Establece el peso de la fuente en negrita
    fontSize: 16, // Tamaño de la fuente para el texto del botón
  },
  createAccountText: {
    color: '#fff', // Texto blanco
    marginBottom: 30, // Espacio inferior del texto
  },
  createLink: {
    color: '#8c52ff', // Color morado para el enlace "Create"
    fontWeight: 'bold', // Establece el peso de la fuente en negrita
  },
  guestButton: {
    borderColor: '#8c52ff', // Borde morado para el botón "Continue as Guest"
    borderWidth: 1, // Ancho del borde
    paddingVertical: 15, // Espaciado vertical interno
    paddingHorizontal: 50, // Espaciado horizontal interno
    borderRadius: 10, // Esquinas redondeadas
  },
  guestButtonText: {
    color: '#8c52ff', // Texto morado para el botón "Continue as Guest"
    fontWeight: 'bold', // Establece el peso de la fuente en negrita
    fontSize: 16, // Tamaño de la fuente para el texto del botón
  },
});

// Exporta el componente LoginScreen para que pueda ser utilizado en otras partes de la aplicación.
export default LoginScreen;
