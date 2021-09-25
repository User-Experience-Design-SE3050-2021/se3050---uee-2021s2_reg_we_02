import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from 'react-native'

export default function contactUs() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.welcomeText}>Contact Us</Text>
        <Image source={require('../../contactus.png')} style={styles.logo}></Image>
      </View>

      <View style={styles.BackgroungContainer}>
        <ImageBackground
          source={require('../../Capture.png')}
          style={styles.Backgroundimage}
        >
          <View style={styles.topic}>
            <Text style={styles.topictext}>
              Please Don't Hesitate To{'\n'} Contact Us {'\n'} If You Have Any
              Question!
            </Text>
          </View>
          <View style={styles.contactusview}>
            <Image
              source={require('../../facebook.png')}
              style={styles.contact}
            ></Image>
            <Text
              style={styles.context}
              onPress={() => {
                Linking.openURL('https://www.facebook.com/www.enna.lk')
              }}
            >
              Find Us On Facebook
            </Text>
            <Image
              source={require('../../email.png')}
              style={styles.contact}
            ></Image>
            <Text style={styles.context} onPress={() => {
                Linking.openURL('mailto:ennaapp@gmail.com')
              }}>Find Us On Email</Text>
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
  contact: {
    width: 90,
    height: 90,
  },
  topictext: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contactusview: {
    marginTop: 20,
    alignItems: 'center',
  },
  context: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
})
