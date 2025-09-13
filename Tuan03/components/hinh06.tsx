import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
export default function Register() {
  const [selected, setSelected] = useState<String>("");
  const options = ['Male', 'Female'];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>
      <View style={{ width: '100%' }}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Phone" />
        <TextInput style={styles.input} placeholder="Email" />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <FontAwesome
            style={{ position: 'absolute', right: 10, top: 15 }}
            name="eye"
            size={30}
            color="black"
          />
        </View>
        <TextInput style={styles.input} placeholder="Birthday" />
        <View style={{flexDirection: 'row'}}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.radioContainer}
            onPress={() => setSelected(option)}>
            <View style={styles.outerCircle}>
              {selected === option && <View style={styles.innerCircle} />}
            </View>
            <Text style={styles.radioText}>{option}</Text>
          </TouchableOpacity>
        ))}
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          paddingHorizontal: 110,
          paddingVertical: 10,
          backgroundColor: '#c34e3b',
          width: '100%',
        }}>
        <Text style={{ color: 'white' }}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.subText}>when you agree to terms and conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8efde',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#c9e0d0',
    marginVertical: 10,
    paddingVertical: 12,
    paddingLeft: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 15
  },
  outerCircle: {
    height: 12,
    width: 12,
    borderRadius: '50%',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'black',
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
  subText: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 15,
    color: 'black',
  },
});
