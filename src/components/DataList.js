import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const DataList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>Latitude: {item.latitude}</Text>
          <Text>Longitude: {item.longitude}</Text>
          <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100 }} />
        </View>
      )}
    />
  );
};

export default DataList;
