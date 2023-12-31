import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from "./StyleResetPassword";

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Este campo es obligatorio.');
    } else if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres.');
    } else {
      setPasswordError('');
    }
  };

  const validateNewPassword = () => {
    if (!newPassword) {
      setNewPasswordError('Este campo es obligatorio.');
    } else if (newPassword.length < 8) {
      setNewPasswordError('La nueva contraseña debe tener al menos 8 caracteres.');
    } else {
      setNewPasswordError('');
    }
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError('Este campo es obligatorio.');
    } else if (confirmPassword !== newPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleResetPassword = () => {
     // Verificar si los campos están vacíos
    if (!password || !newPassword || !confirmPassword) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validar los campos antes de continuar
    validatePassword();
    validateNewPassword();
    validateConfirmPassword();

    // Verificar si hay errores de validación antes de proceder
    if (passwordError || newPasswordError || confirmPasswordError) {
      return;
    }

    // Envío de restablecimiento de contraseña
    alert('Restablecimiento de contraseña exitoso');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./xbox.jpeg')}
        style={{ width: 140, height: 140, alignSelf: 'center', marginTop: 50 }}
      />
      <Text style={{ margin: 20, fontSize: 20 }}>Cambio de contraseña</Text>
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

export default ResetPassword;
