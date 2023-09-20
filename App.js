import React from "react";
import { NativeBaseProvider, Box, Container } from "native-base";
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';


export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Container>
          <ResetPassword/>
        </Container>
      </Box>
    </NativeBaseProvider>
  );
}
