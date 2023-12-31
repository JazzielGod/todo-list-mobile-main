import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from "./StyleLogin";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateFields = () => {
    let valid = true;

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      setEmailError('El correo electrónico no es válido.');
      valid = false;
    } else {
      setEmailError('');
    }

    // Validar que la contraseña tenga al menos 8 caracteres
    if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres.');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleLogin = () => {
    if (validateFields()) {
      //inicio de sesión si los campos son válidos
      alert('Inicio de sesión exitoso');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('./xbox.jpeg')}
          style={{ width: 140, height: 140, alignSelf: 'center', marginTop: 50 }}
        />
      </View>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.error}>{emailError}</Text>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={styles.error}>{passwordError}</Text>
        </View>
        <View style={styles.formGroup}>
          <Button title="Iniciar sesión" onPress={handleLogin} />
        </View>
        <View style={styles.formGroup}>
          <Button title="¿Contraseña Olvidada?" />
        </View>
      </View>
    </View>
  );
}

export default Login;
