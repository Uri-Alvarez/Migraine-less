import React from 'react'; // Importa React y la librería necesaria para la navegación
import { NavigationContainer } from '@react-navigation/native'; // Importa el contenedor de navegación desde React Navigation
import { createStackNavigator } from '@react-navigation/stack'; // Importa el creador de navegadores de pila (stack navigator)
import { StatusBar } from 'expo-status-bar'; // Importa el componente StatusBar desde Expo
import LoginScreen from './screens/LoginScreen'; // Importa la pantalla de inicio de sesión
import HomeScreen from './screens/HomeScreen'; // Importa la pantalla principal
import CreateAccountScreen from './screens/CreateAccountScreen'; // Importa la pantalla del botón CreateAccount
import InformationScreen from './screens/InformationScreen'; // Importa la pantalla del botón "Informacion"
import AurasInfoScreen from './screens/AurasInfoScreen';
import PoliciesScreen from './screens/PoliciesScreen';

// Crea una instancia del navegador de pila
const Stack = createStackNavigator();

export default function App() {
  return (
    // Envuelve las pantallas en un contenedor de navegación
    //Este contenedor permite la navegación entre pantallas (interacción entre botones)
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Login">
        
        {/* Define la pantalla de inicio de sesión */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Opcional: oculta el encabezado en esta pantalla
        />

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Home', // Título de la pantalla
            headerStyle: {
              backgroundColor: '#131c46', // Cambia el color de fondo de la barra de navegación
            },
            headerTintColor: '#fff', // Cambia el color del texto en la barra de navegación
          }} 
        />

        <Stack.Screen
          name="Create"
          component={CreateAccountScreen}
          options={{
            title: 'Create Account', // Título de la pantalla
            headerStyle: {
              backgroundColor: '#131c46', // Cambia el color de fondo de la barra de navegación
            },
            headerTintColor: '#fff', // Cambia el color del texto en la barra de navegación
          }}
        />

        <Stack.Screen 
          name="Migraines Information"
          component={InformationScreen}
          options={{ 
            title: 'Migraines Information', // Título de la pantalla
            headerStyle: {
              backgroundColor: '#131c46', // Cambia el color de fondo de la barra de navegación
            },
            headerTintColor: '#fff', // Cambia el color del texto en la barra de navegación
          }} 
        />

        <Stack.Screen 
          name="Auras Migraine"
          component={AurasInfoScreen}
          options={{ 
            title: 'Auras Migraine', // Título de la pantalla
            headerStyle: {
              backgroundColor: '#131c46', // Cambia el color de fondo de la barra de navegación
            },
            headerTintColor: '#fff', // Cambia el color del texto en la barra de navegación
          }} 
        />

        <Stack.Screen 
          name="Politicas de Privacidad" 
          component={PoliciesScreen} 
          options={{ 
            title: 'Politicas de Privacidad', // Título de la pantalla
            headerStyle: {
              backgroundColor: '#131c46', // Cambia el color de fondo de la barra de navegación
            },
            headerTintColor: '#fff', // Cambia el color del texto en la barra de navegación
          }} 
        />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
