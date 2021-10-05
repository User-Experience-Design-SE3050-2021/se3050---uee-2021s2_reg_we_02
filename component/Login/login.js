import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native'
import { Button } from 'react-native-paper'

export default function login({ navigation }) {
  const [Email, onChangeEmail] = React.useState('')
  const [Password, onChangePassword] = React.useState('')

  const forgotpassword = () => {
    navigation.push('Forgetpassword')
  }
  const signup = () => {
    navigation.push('Signup')
  }
  const DashBoard = () => {
    if (Email != '' && Password != '') {
      navigation.push('DashBoard')
    } else {
      alert('please enter valid details')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.welcomeText}>Welcome !</Text>
        <Image
          source={require('../../mainlogo.jpg')}
          style={styles.mainlogo}
        ></Image>
      </View>
      <View style={styles.BackgroungContainer}>
        <ImageBackground
          source={require('../../Capture.png')}
          style={styles.Backgroundimage}
        >
          <TextInput
            style={styles.input1}
            onChangeText={onChangeEmail}
            placeholder="Email"
            value={Email}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input2}
            onChangeText={onChangePassword}
            placeholder="Password"
            value={Password}
          />
          <View style={styles.logbutton}>
            <Button
              mode="contained"
              compact="true"
              color="#fff"
              mode="contained"
              onPress={DashBoard}
            >
              LOG IN
            </Button>
          </View>
          <View style={styles.below}>
            <Text style={styles.belowText1} onPress={forgotpassword}>
              Forget Password?
            </Text>
            <View style={styles.verticleLine}></View>
            <Text style={styles.belowText2} onPress={signup}>
              Create Account!
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  BackgroungContainer: {
    zIndex: 0,
    flex: 0.8,
  },
  welcomeText: {
    zIndex: 2,
    marginTop: 175,
    fontSize: 30,
    color: '#024F85',
  },
  Backgroundimage: {
    marginTop: 200,
    width: '100%',
    height: '100%',
  },
  mainlogo: {
    marginTop: 40,
    width: 175,
    height: 175,
    borderRadius: 40,
  },
  input1: {
    zIndex: 1,
    marginTop: 50,
    fontSize: 20,
    backgroundColor: '#97D2FC',
    fontStyle: 'italic',
    fontWeight: 'bold',
    height: 50,
    marginLeft: '15%',
    marginRight: '15%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
  },
  input2: {
    zIndex: 1,
    marginTop: 15,
    fontSize: 20,
    backgroundColor: '#97D2FC',
    fontStyle: 'italic',
    fontWeight: 'bold',
    height: 50,
    marginLeft: '15%',
    marginRight: '15%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
  },
  logbutton: {
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: 45,
    marginBottom: 60,
    backgroundColor: '#97D2FC',
    borderRadius: 40,
  },
  below: {
    marginLeft: '10%',
    marginRight: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  belowText1: {
    fontSize: 20,
    marginRight: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
  belowText2: {
    fontSize: 20,
    marginLeft: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
  verticleLine: {
    height: '100%',
    width: 2,
    backgroundColor: '#909090',
  },
})
