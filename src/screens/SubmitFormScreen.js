import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import SubmitForm from '../components/SubmitForm';
import apiService from '../services/api';

const SubmitFormScreen = ({ navigation }) => {
  const [token, setToken] = useState(null);

  const handleSubmitForm = async ({ latitude, longitude, image }) => {
    try {
      if (!latitude || !longitude || !image || !token) {
        throw new Error('Values missing. Please fill in all required fields.');
      }

      const formData = new FormData();
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
      formData.append('image', {
        uri: image.uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });

      const response = await apiService.submitFormData(token, formData);

      if (response.success) {
        navigation.navigate('DataList');
        Alert.alert('Form Submission Success', 'Data registered');
      } else {
        Alert.alert('Form Submission Error', 'Failed to register data.');
      }
    } catch (error) {
      console.error('Form Submission Error:', error.message);
      Alert.alert('Form Submission Error', error.message);
    }
  };

  return (
    <ImageBackground source={require('../screens/bg.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Submit Form</Text>
        <SubmitForm onSubmit={handleSubmitForm} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DataList')}>
          <Text style={styles.buttonText}>View Data List</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SubmitFormScreen;
