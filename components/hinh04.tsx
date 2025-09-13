import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function VerifyCodeScreen() {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CODE</Text>
      <Text style={styles.subtitle}>VERIFICATION</Text>
      <Text style={styles.instruction}>
        Enter ontime password sent on {'\n'}+849092605798
      </Text>
      <TextInput
        style={styles.otpInput}
        maxLength={6}
        keyboardType="numeric"
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyText}>VERIFY CODE</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0e8f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  instruction: {
    textAlign: 'center',
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 10,
    width: '80%',
    padding: 10,
    backgroundColor: '#fff',
  },
  verifyButton: {
    backgroundColor: '#FFD700',
    marginTop: 30,
    padding: 12,
    width: '80%',
    alignItems: 'center',
    borderRadius: 6,
  },
  verifyText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
