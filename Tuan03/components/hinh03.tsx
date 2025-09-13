import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function ForgetPassword() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo circle */}
      <LinearGradient
      colors={['#ffffff', '#d9f3ff', '#00cfff']} // trắng -> xanh nhạt -> xanh dương đậm
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <FontAwesome name="lock" size={100} color="black" />
      </View>
      {/* Header text */}
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>
          <Text style={{ fontWeight: 'bold' }}>FORGET{'\n'}PASSWORD</Text>
        </Text>
      </View>
      {/* Subtitle */}
      <Text style={styles.subText}>
        Provide your account's email for which you want to reset password
      </Text>
      {/* Buttons */}
      <View style={{}}>
      <MaterialIcons name="mail" size={30} color="black" style={{position: 'absolute', top: 5, left: 5}} />
        <TextInput
        style={{ paddingHorizontal: 50, paddingVertical: 10,
              backgroundColor: '#CCC'
        }}
        placeholder={"Email"}
        maxLength={6}
        keyboardType="numeric"
      />
      </View>
      <View>  
        <TouchableOpacity style={{marginTop: 50, paddingHorizontal: 110, 
        paddingVertical: 10, backgroundColor: "orange"}}>
        Next
        </TouchableOpacity>
      </View>
          </LinearGradient>
    </SafeAreaView>
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
  logoContainer: {
    padding: 5,
    marginBottom: 20,
  },
  headerBox: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  subText: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 15,
    color: 'black',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  loginBtn: {
    backgroundColor: 'orange',
  },
  signupBtn: {
    backgroundColor: 'yellow',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
});
