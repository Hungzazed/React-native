import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
export default function Login() {
   return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputWrapper}>
        <FontAwesome name="user" size={20} color="black" style={styles.icon} />
        <TextInput
          placeholder="Name"
          style={styles.input}
          placeholderTextColor="#555"
        />
      </View>

      <View style={styles.inputWrapper}>
        <FontAwesome name="lock" size={20} color="black" style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="#555"
        />
        <TouchableOpacity
          style={styles.eyeIcon}
        >
          <Ionicons
            name={'eye'}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Create Account */}
      <TouchableOpacity>
        <Text style={styles.createText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efb916',  
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 50,
    color: '#000',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  eyeIcon: {
    padding: 5,
  },
  loginButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 6,
    marginVertical: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  createText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
});
