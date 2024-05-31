import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DoctorHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao Home do Médico!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});