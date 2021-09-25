import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'

export default function privacyPolicies({ navigation }) {
  const [Email, onChangeEmail] = React.useState(null)

  const policies = () => {
    navigation.push('Policies')
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.welcomeText} onPress={policies}>
          Privacy And Policies
        </Text>
        <Image
          source={require('../../privacy.png')}
          style={styles.logo}
        ></Image>
      </View>

      <View style={styles.BackgroungContainer}>
        <ImageBackground
          source={require('../../Capture.png')}
          style={styles.Backgroundimage}
        >
          <ScrollView>
          <View style={styles.topic}>
            
            <Text style={styles.topictext}>
             Enna.Lk Build The Enna.Lk App As An Ad Support App. This Service
                Is Provided By Enna.Lk At No Cost And Intended For Use As Is.
                {'\n'}{'\n'}
               This Page Is Used To Inform Website Visitors Regarding Our Policies
            With The Collection, Use, And Disclosure Of Personal Information If
            Anyone Decided To Use Our Service.{'\n'}
            {'\n'} If You Choose To Use Our Service, Then You Agree To The
            Collection And Use Of Information In Relation To This Policy. The
            Personal Information That We Collect Is Used For Providing And
            Improving The Service.{'\n'}{'\n'} We Will Not Use Or Share Your Information
            With Anyone Except As Described In This Privacy Policy. {'\n'}
            {'\n'}The Terms Used In This Privacy Policy Have The Same Meanings
            As In Our Terms And Conditions , Which Are Accessible At Enna.Lk
            Unless Otherwise Defined In This Privacy Policy.{'\n'}
            </Text>
            
          </View>
          </ScrollView>

          
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
    marginTop: 180,
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
})
