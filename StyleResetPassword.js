import { StyleSheet } from 'react-native';

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
      textAlign: 'center',
      marginBottom: 5,
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
      textAlign: 'center',
      fontSize: 16,
    },
    formButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  export { styles }