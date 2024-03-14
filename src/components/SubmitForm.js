
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const SubmitForm = ({ onSubmit }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Please grant camera access to use this feature.');
    }
  };

  const captureImage = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result);
      }
    } catch (error) {
      console.error('Image capture error:', error);
      Alert.alert('Error', 'An error occurred while capturing image.');
    }
  };

  const handleSubmit = () => {
    if (!latitude.trim() || !longitude.trim() || !image || !image.uri) {
      Alert.alert('Error', 'Please fill in all required fields and capture an image.');
      return;
    }
    onSubmit({ latitude, longitude, image });
  };

  return (
    <View>
      <TextInput
        placeholder="Latitude"
        value={latitude}
        onChangeText={setLatitude}
      />
      <TextInput
        placeholder="Longitude"
        value={longitude}
        onChangeText={setLongitude}
      />
      <Button title="Take Picture" onPress={captureImage} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default SubmitForm;
