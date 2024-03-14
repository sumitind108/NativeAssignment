
import React from 'react';
import { View, Alert, StyleSheet, ImageBackground } from 'react-native';
import LoginForm from '../components/LoginForm';
import { useNavigation } from '@react-navigation/native';
import { login } from '../services/auth';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = async ({ email, password }) => {
    try {
      // Check if any required field is missing
      if (!email || !password) {
        throw new Error('Values missing');
      }

      const formData = { email, password };

      const response = await login(formData);

      // Handle success response
      if (response.success) {
        navigation.navigate('SubmitForm');
        Alert.alert('Login Success', 'Login successful');
      } else {
        // Handle error response
        if (response.message === 'Email or password incorrect.') {
          Alert.alert('Login Error', 'Email or password incorrect.');
        } else {
          Alert.alert('Login Error', 'Login failed. Please try again.');
        }
      }
    } catch (error) {
      // Handle other errors
      console.error('Login Error:', error);
      Alert.alert('Login Error', 'Login failed. Please try again.');
    }
  };

  return (
    <ImageBackground source={require('../screens/bg.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <LoginForm onSubmit={handleLogin} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
