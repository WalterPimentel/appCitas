import React, {useState} from 'react'

import {
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'

import DatePicker from 'react-native-date-picker'

const Formulario = ({ modalVisible }: { modalVisible: boolean }) => {

    const [paciente, setPaciente]       = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail]             = useState('')
    const [telefono, setTelefono]       = useState('')
    const [fecha, setFecha]             = useState(new Date())
    const [sintomas, setSintomas]       = useState('')

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

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Mascota</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Mascota'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}
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
    }
})

export default Formulario