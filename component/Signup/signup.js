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

export default function signup({navigation}) {
  const [Email, onChangeEmail] = React.useState(null)
  const [Password, onChangePassword] = React.useState(null)
  const [RePassword, onChangeRePassword] = React.useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.welcomeText}>Create Account !</Text>
        <Image source={require('../../signup.png')} style={styles.logo}></Image>
      </View>

      <View style={styles.BackgroungContainer}>
        <ImageBackground
          source={require('../../Capture.png')}
          style={styles.Backgroundimage}
        >
          <View style={styles.topic}>
            <Text style={styles.topictext}>
              With Your New Account, {"\n"} You Can Take Advantage Of All {"\n"} The Benefits
            </Text>
          </View>

          <TextInput
            style={styles.input1}
            onChangeText={onChangeEmail}
            placeholder="Email"
            value={Email}
          />
          <TextInput
            style={styles.input2}
            type="password"
            onChangeText={onChangePassword}
            placeholder="Password(Use:'#' ,'@','*','1')"
            value={Password}
          />
          <TextInput
            style={styles.input2}
            type="password"
            onChangeText={onChangeRePassword}
            placeholder="Re-Password(Use:'#' ,'@','*','1')"
            value={RePassword}
          />

          <View style={styles.logbutton}>
            <Button
              mode="contained"
              compact="true"
              color="#fff"
              mode="contained"
              onPress={() => console.log('Pressed')}
            >
              SIGNUP
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
    marginTop: 30,
    width: 175,
    height: 175,
    borderRadius: 40,
  },
  topic: {
    marginTop: 45,
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
    marginTop: 20,
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
    marginTop: 15,
    marginBottom: 60,
    backgroundColor: '#97D2FC',
    borderRadius: 40,
  },
})
