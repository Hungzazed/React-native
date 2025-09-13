import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
// import LoginPage from './components/hinh08'
// import SignUpScreen from './components/hinh01'
// import VerifyCodeScreen from './components/hinh04'
// import ForgetPassword from './components/hinh03'
// import SignUpScreen from './components/hinh02'
// import Login from './components/hinh05'
// import Register from './components/hinh06'
import Login from './components/hinh07'

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
        <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
