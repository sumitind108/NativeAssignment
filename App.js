import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import SubmitFormScreen from './src/screens/SubmitFormScreen';
import DataListScreen from './src/screens/DataListScreen';
import 'react-native-gesture-handler';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SubmitForm" component={SubmitFormScreen} />
        <Stack.Screen name="DataList" component={DataListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


