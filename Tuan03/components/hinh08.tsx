import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://img.icons8.com/3d-fluency/94/visible.png' }}
        style={styles.logo}
      />
      <TextInput style={styles.input} placeholder="Please input user name" />
      <TextInput
        style={styles.input}
        placeholder="Please input password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.rowText}>
        <Text>Register</Text>
        <Text>Forgot Password</Text>
      </View>
      <Text style={styles.orText}>Other Login Methods</Text>
      <View style={styles.iconRow}>
        <Image
          source={{
            uri: 'https://img.icons8.com/color/48/add-user-group-man-man.png',
          }}
          style={styles.icon}
        />
        <Image
          source={{ uri: 'https://img.icons8.com/color/48/wifi.png' }}
          style={styles.icon}
        />
        <Image
          source={{ uri: 'https://img.icons8.com/color/48/facebook-new.png' }}
          style={styles.icon}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingVertical: 8,
  },
  loginButton: {
    backgroundColor: '#1E90FF',
    width: '100%',
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 6,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  rowText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 15,
  },
  orText: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    width: 48,
    height: 48,
  },
});
