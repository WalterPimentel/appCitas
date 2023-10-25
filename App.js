/* IMPORTARCIONES DE REACT */
// useState - Es par usar los Hooks

import React, { useState } from 'react';

/* COMPONENTES DE REACT NATIVE */
// SafeAreaView - posiciona todo el contenido del aplicativo adecuadamente en la pantalla
// Text - imprimir texto en pantalla
// View - Es como un div de HTML
// Button - Boton clásico
// StyleSheet - Es CSS en React Native
// Pressable - Es igual que el Button pero es mejor al soportar mas eventos
// Image -
// Alert - 
// ScrollView - Poder navegar mas abajo, como agregar un scroll en la web
// FlatList - 
// Modal - 
// Picker - 
// Modal - Es para abrir una ventana emergente
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  Modal
} from 'react-native';

import Formulario from './src/components/Formulario';

const App = () => {

  // Los Hooks se colocan en la parte superior, antes de toda función
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}
      >
        <Text
          style={styles.btnTextoNuevaCita}
        >Nueva Cita</Text>
      </Pressable>

      {/* Aqui llamamos al formulario desde import y creamos props para enviar variables o funciones*/}
      <Formulario
        modalVisible={modalVisible}
      />
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
  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});

export default App;