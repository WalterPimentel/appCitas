import React, { useState } from 'react'

import {
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Alert
} from 'react-native'

import DatePicker from 'react-native-date-picker'

const Formulario = ({ modalVisible, setModalVisible, setMascotas, mascotas }) => {

    const [mascota, setMascota] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState(new Date())
    const [sintomas, setSintomas] = useState('')

    const handleCita = () => {
        // Validaciones
        if ([mascota, propietario, email, telefono, fecha, sintomas].includes('')) {
            Alert.alert(
                'Lo sentimos', // Títitulo
                'Todos los campos son obligatorios.', // Descripción

                // [{text: 'Aceptar', styles: 'default'}] Botón OK (biene por defecto en alert)

                // [{text: 'Cancelar', style: 'cancel'},
                // {text: 'Aceptar', style: 'default'}] Botónes Cancelar y OK (Respetar orden)

                // [{text: 'Recordarme después'},
                // {text: 'Cancelar', style: 'cancel'},
                // {text: 'Aceptar', style: 'default'}] Botónes Neutral, Cancelar y OK (Respetar orden)
            )

            return
        }

        const nuevaMasctoa = {
            mascota,
            propietario,
            email,
            telefono,
            fecha,
            sintomas
        }

        setMascotas([...mascotas, nuevaMasctoa])
        setModalVisible(!modalVisible)

        setMascota('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setFecha(new Date())
        setSintomas('')
    }

    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
        >
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text
                        style={styles.titulo}
                    >Nueva {''}
                        <Text
                            style={styles.tituloBold}
                        >Cita</Text>
                    </Text>

                    <Pressable
                        style={styles.btnCancelar}
                        onLongPress={() => setModalVisible(!modalVisible)}
                        onPress={() => console.log('Mantener presionado para cancelar')}
                    >
                        <Text
                            style={styles.btnCancelarTexto}
                        >
                            X Cancelar
                        </Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Mascota</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Mascota'
                            placeholderTextColor={'#666'}
                            value={mascota}
                            onChangeText={setMascota}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propietario</Text>
                        <TextInput
                            keyboardType='email-address' // puedes poner tipo de teclado, como numerico, email, etc
                            style={styles.input}
                            placeholder='@Email Propietario'
                            placeholderTextColor={'#666'}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono Propietario</Text>
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            placeholder='Teléfono Propietario'
                            placeholderTextColor={'#666'}
                            value={telefono}
                            onChangeText={setTelefono}
                            maxLength={9}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha Alta</Text>
                        <View style={styles.contenedorFecha}>
                            <DatePicker
                                date={fecha}
                                locale='es'
                                mode='date'
                                onDateChange={(date) => setFecha(date)}
                            />
                        </View>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas</Text>
                        <TextInput
                            style={[styles.input, styles.sintomasInput]}
                            placeholder='Describa Algunos Síntomas de la Mascota'
                            placeholderTextColor={'#666'}
                            value={sintomas}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>

                    <Pressable
                        style={styles.btnNuevaCita}
                        onPress={handleCita}
                    >
                        <Text
                            style={styles.btnNuevaCitaTexto}
                        >
                            + Agregar Mascota
                        </Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#6D28D9',
        flex: 1
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginStart: 30,
        color: '#FFF'
    },
    tituloBold: {
        fontWeight: '900'
    },
    btnCancelar: {
        backgroundColor: '#5827A4',
        marginVertical: 30,
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10
        // borderWidth: 1,
        // borderColor: '#FFF'
    },
    btnCancelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    campo: {
        marginVertical: 5,
        marginHorizontal: 30
    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10
    },
    sintomasInput: {
        height: 100
    },
    contenedorFecha: {
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: '#F59E0B',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnNuevaCitaTexto: {
        textAlign: 'center',
        color: '#5827A4',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 16
    }
})

export default Formulario