
import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import DataList from '../components/DataList';
import apiService from '../services/api';

const DataListScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiService.getData();
      if (response.success) {
        setData(response.data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Fetch Data Error:', error);
      Alert.alert('Fetch Data Error', 'An error occurred while fetching data');
    }
  };

  return (
    <View>
      <DataList data={data} />
    </View>
  );
};

export default DataListScreen;
