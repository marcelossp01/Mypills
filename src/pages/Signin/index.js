import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from "react-native-animatable";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDoctor, setIsDoctor] = useState(false);

  const handleLogin = () => {
    if (isDoctor) {
      navigation.navigate('DoctorHome');
    } else {
      navigation.navigate('UserHome');
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite um email...'
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.senha}>Senha</Text>
        <TextInput
          placeholder='Sua senha'
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <TouchableOpacity onPress={() => setIsDoctor(false)} style={isDoctor ? styles.switchButton : styles.switchButtonActive}>
            <Text style={isDoctor ? styles.switchButtonText : styles.switchButtonTextActive}>Usuário</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsDoctor(true)} style={isDoctor ? styles.switchButtonActive : styles.switchButton}>
            <Text style={isDoctor ? styles.switchButtonTextActive : styles.switchButtonText}>Médico</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#a1a1a1',
  },
  switchContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  switchButton: {
    padding: 10,
    borderRadius: 4,
    borderColor: '#38a69d',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  switchButtonActive: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#38a69d',
    marginHorizontal: 5,
  },
  switchButtonText: {
    color: '#38a69d',
    fontWeight: 'bold',
  },
  switchButtonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
});