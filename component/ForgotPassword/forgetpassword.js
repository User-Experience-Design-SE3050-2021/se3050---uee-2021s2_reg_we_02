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

export default function forgot({ navigation }) {
  const [Email, onChangeEmail] = React.useState('')

  const DashBoard = () => {
    if (Email != '') {
      navigation.push('Login');
    } else {
       alert('please enter valid details')
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.welcomeText}>
          Forget Password ?
        </Text>
        <Image
          source={require('../../forgotpassword.png')}
          style={styles.logo}
        ></Image>
      </View>

      <View style={styles.BackgroungContainer}>
        <ImageBackground
          source={require('../../Capture.png')}
          style={styles.Backgroundimage}
        >
          <View style={styles.topic}>
            <Text style={styles.topictext}>
              Please Enter Your Registered Email We Will Get Back To You The New
              Password!
            </Text>
          </View>

          <TextInput
            style={styles.input1}
            onChangeText={onChangeEmail}
            placeholder="Email"
            value={Email}
          />

          <View style={styles.logbutton}>
            <Button
              mode="contained"
              compact="true"
              color="#fff"
              mode="contained"
              onPress={DashBoard}
            >
              SUBMIT
            </Button>
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
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  BackgroungContainer: {
    zIndex: 0,
    flex: 0.9,
  },
  welcomeText: {
    zIndex: 2,
    marginTop: 200,
    fontSize: 30,
    color: '#024F85',
  },
  Backgroundimage: {
    marginTop: 200,
    width: '100%',
    height: '100%',
  },
  logo: {
    marginTop: 20,
    width: 175,
    height: 175,
    borderRadius: 40,
  },
  topic: {
    marginTop: 50,
    marginLeft: '10%',
    marginRight: '10%',
  },
  topictext: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input1: {
    zIndex: 1,
    marginTop: 40,
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
    marginTop: 60,
    marginBottom: 60,
    backgroundColor: '#97D2FC',
    borderRadius: 40,
  },
})
