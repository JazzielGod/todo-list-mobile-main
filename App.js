import { NativeBaseProvider, Box, Container } from "native-base";
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

  const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Container>
            <Login/>
          </Container>
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>

  );
}

export default App;