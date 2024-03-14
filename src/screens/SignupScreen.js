
import React from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import SignupForm from '../components/SignupForm';
import { signup } from '../services/auth';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();

  const handleSignup = async ({ email, name, password }) => {
    try {
      // Check if any required field is missing
      if (!email || !name || !password) {
        throw new Error('Values missing');
      }

      const formData = { email, name, password };

      const response = await signup(formData);

      // Handle success response
      if (response.success) {
        navigation.navigate('Login');
        Alert.alert('Signup Success', 'Registered');
      } else {
        // Handle error response
        if (response.message === 'Username is already taken.') {
          Alert.alert('Signup Error', 'Username is already taken.');
        } else {
          Alert.alert('Signup Error', 'Signup failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Signup Error:', error);
      Alert.alert('Signup Error', 'Signup failed. Please try again.');
    }
  };

  return (
    <ImageBackground source={require('../screens/bg.jpeg')} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create an Account</Text>
        <SignupForm onSubmit={handleSignup} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  loginLink: {
    marginTop: 20,
    color: '#007bff',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default SignupScreen;
