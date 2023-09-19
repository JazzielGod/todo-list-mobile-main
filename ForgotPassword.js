import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(email)) {
      setEmailError('El correo electrónico no es válido.');
    } else {
      setEmailError('');
    }
  };

  const handleEmailSubmit = () => {
    // Primero, valida el email
    validateEmail();

    if (!email) {
      setEmailError('El campo de correo electrónico es obligatorio.');
      return;
    }

    // Luego, verifica si hay errores de validación antes de continuar
    if (emailError) {
      return;
    }

    //manejar el envío
    alert('Email enviado con éxito');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./xbox.jpeg')}
        style={{ width: 140, height: 140, alignSelf: 'center', marginTop: 50 }}
      />
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          onBlur={validateEmail}
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      </View>

      <View style={styles.formButtons}>
        <Button title="Enviar" onPress={handleEmailSubmit} />
      </View>
      <Button title="Login" onPress={() => { /* Manejar la cancelación */ }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    textAlign: 'center', // Centrar el texto
    marginBottom: 5, // Espacio después del texto
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
    textAlign: 'center', // Centrar el texto
    fontSize: 16,
  },
  formButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ForgotPassword;
