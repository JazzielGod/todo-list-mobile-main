import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres.');
    } else {
      setPasswordError('');
    }
  };

  const validateNewPassword = () => {
    if (newPassword.length < 8) {
      setNewPasswordError('La nueva contraseña debe tener al menos 8 caracteres.');
    } else {
      setNewPasswordError('');
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== newPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleResetPassword = () => {
    // Validar los campos antes de continuar
    validatePassword();
    validateNewPassword();
    validateConfirmPassword();

    // Verificar si hay errores de validación antes de proceder
    if (passwordError || newPasswordError || confirmPasswordError) {
      return;
    }

    //envío de restablecimiento de contraseña
    alert('Restablecimiento de contraseña exitoso');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./xbox.jpeg')}
        style={{ width: 140, height: 140, alignSelf: 'center', marginTop: 50 }}
      />
      <Text style={{margin: 20, fontSize: 20}}>Cambio de contraseña</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          onBlur={validatePassword}
        />
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>New Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry={true}
          onChangeText={(text) => setNewPassword(text)}
          onBlur={validateNewPassword}
        />
        {newPasswordError ? <Text style={styles.error}>{newPasswordError}</Text> : null}
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          onBlur={validateConfirmPassword}
        />
        {confirmPasswordError ? (
          <Text style={styles.error}>{confirmPasswordError}</Text>
        ) : null}
      </View>
      <View style={styles.formButtons}>
        <Button title="Enviar" onPress={handleResetPassword} />
        <Button title="Cancelar" onPress={() => { /* Manejar la cancelación */ }} />
      </View>
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

export default ResetPassword;
