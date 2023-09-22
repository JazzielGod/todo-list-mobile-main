import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    iconContainer: {
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
    },
    form: {
      width: '100%',
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
  });
 export { styles }  