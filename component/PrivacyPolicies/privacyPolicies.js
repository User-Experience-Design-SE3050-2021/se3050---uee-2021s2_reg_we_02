import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native'

export default function policies() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Text style={styles.welcomeText}>Privacy Polices</Text>
        </View>

        <View style={styles.BackgroungContainer}>
          <ImageBackground
            source={require('../Capture.png')}
            style={styles.Backgroundimage}
          >
            <View style={styles.topic}>
              <Text style={styles.topictext}>
                Enna.Lk Build The Enna.Lk App As An Ad Support App. This Service
                Is Provided By Enna.Lk At No Cost And Intended For Use As Is.
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.belowContainer}>
          <Text style={styles.topictext1}>
            This Page Is Used To Inform Website Visitors Regarding Our Policies
            With The Collection, Use, And Disclosure Of Personal Information If
            Anyone Decided To Use Our Service. {'\n'}
            {'\n'} If You Choose To Use Our Service, Then You Agree To The
            Collection And Use Of Information In Relation To This Policy. The
            Personal Information That We Collect Is Used For Providing And
            Improving The Service. We Will Not Use Or Share Your Information
            With Anyone Except As Described In This Privacy Policy. {'\n'}
            {'\n'}The Terms Used In This Privacy Policy Have The Same Meanings
            As In Our Terms And Conditions , Which Are Accessible At Enna.Lk
            Unless Otherwise Defined In This Privacy Policy.{'\n'}
          </Text>
        </View>
      </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  BackgroungContainer: {
    zIndex: 0,
    flex: 0.3,
    backgroundColor: '#024F85',
  },
  belowContainer: {
    zIndex: 0,
    flex: 0.7,
    backgroundColor: '#024F85',
  },
  welcomeText: {
    zIndex: 2,
    marginTop: 20,
    fontSize: 30,
    color: '#024F85',
  },
  Backgroundimage: {
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
    zIndex: 2,
    marginTop: 55,
    marginLeft: '10%',
    marginRight: '10%',
  },
  topictext: {
    zIndex: 2,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topictext1: {
    marginLeft: '10%',
    marginRight: '10%',
    zIndex: 2,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
