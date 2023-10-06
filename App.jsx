import { NativeBaseProvider, Box, Container } from "native-base";
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Header } from "./components/Header";
import { Email } from "./components/Email";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser } from "./src/redux/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
      <>
        <Header />
        <Email />
      </>
  );
}

export default App;