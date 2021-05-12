import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        title="Register"
        onClick={() => navigation.navigate('Register')}
      />
      <Button title="Login" onClick={() => navigation.navigate('Login')} />
    </View>
  );
}
