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
export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <View style={{ width: '100%' }}>
        <TextInput style={styles.input} placeholder="Please input user name" />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Please input password"
            secureTextEntry
          />
          <FontAwesome
            style={{ position: 'absolute', right: 10, top: 15 }}
            name="eye"
            size={30}
            color="black"
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 50,
          paddingHorizontal: 110,
          paddingVertical: 10,
          backgroundColor: '#c34e3b',
          width: '100%',
        }}>
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.subText}>when you agree to terms and condition</Text>
      <Text style={[styles.subText, { textDecorationLine: 'underline', color: 'purple'}]}>Forgot password ?</Text>
      <Text style={styles.subText}>Or login with</Text>
      <View style={{flexDirection: 'row', width: '100%'}}>
        {/* Facebook */}
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#3b5998', flex: 1 }]}>
          <FontAwesome name="facebook-f" size={24} color="white" />
        </TouchableOpacity>

        {/* Zalo */}
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#0072C6', flex: 1 }]}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>Z</Text>
        </TouchableOpacity>

        {/* Google */}
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#fff', flex: 1 }]}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
            }}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
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
    marginBottom: 20
  },
  input: {
    width: '100%',
    backgroundColor: '#c9e0d0',
    marginVertical: 10,
    paddingVertical: 12,
    paddingLeft: 20,
  },
  subText: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 15,
    color: 'black',
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
