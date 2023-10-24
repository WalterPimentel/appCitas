import React, { Fragment } from 'react';

/* COMPONENTES DE REACT NATIVE */
// SafeAreaView - posiciona todo el contenido del aplicativo adecuadamente en la pantalla
// Text - imprimir texto en pantalla
// View - Es como un div de HTML
// Button - Boton clásico
// StyleSheet - Es CSS en React Native
// Pressable - Es igual que el Button pero es mejor al soportar mas eventos
// Image -
// Alert - 
// ScrollView
// FlatList - 
// Modal - 
// Picker - 
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable
} from 'react-native';

const App = () => {

  const nuevaCitaHandler = () => {
    console.log('Diste Click')
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={ nuevaCitaHandler }
      >
        <Text>Nueva Cita</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9'
  }
});

export default App;