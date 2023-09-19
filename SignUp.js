import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateName = () => {
    if (!name) {
      setNameError('El campo de nombre es obligatorio.');
    } else {
      setNameError('');
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(email)) {
      setEmailError('El correo electrónico no es válido.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres.');
    } else {
      setPasswordError('');
    }
  };

  const handleSignUp = () => {
    // Validar los campos antes de continuar
    validateName();
    validateEmail();
    validatePassword();

    //Validación antes de proceder
    if (nameError || emailError || passwordError) {
      return;
    }

    // manejar el envío del registro
    alert('Registro exitoso');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./xbox.jpeg')}
        style={{ width: 140, height: 140, alignSelf: 'center', marginTop: 50 }}
      />
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setName(text)}
          onBlur={validateName}
        />
        {nameError ? <Text style={styles.error}>{nameError}</Text> : null}
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Correo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          onBlur={validateEmail}
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          onBlur={validatePassword}
        />
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      </View>
      <View style={styles.formButtons}>
        <Button title="Enviar" onPress={handleSignUp} />
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
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center', // Centrar el título
  },
});

export default SignUp;
