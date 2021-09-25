import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import login from '../Components/login'
import Forgetpassword from '../Components/forgetpassword'
import Signup from '../Components/signup'
import contactUs from '../Components/contactUs'
import policies from '../Components/privacyPolicies'

const screens = {
  
  Login: {
    screen: login,
    navigationOptions: {
      title: 'Enna.lk - Buy & Sell Anything',
    },
  },
  Forgetpassword: {
    screen: Forgetpassword,
    navigationOptions: {
      title: 'Enna.lk - Buy & Sell Anything',
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Enna.lk - Buy & Sell Anything',
    },
  },
  contactus: {
    screen: contactUs,
    navigationOptions: {
      title: 'Enna.lk - Buy & Sell Anything',
    },
  },
  Policies: {
    screen: policies,
    navigationOptions: {
      title: 'Enna.lk - Buy & Sell Anything',
    },
  },
}

// home stack navigator screens
const RouteStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#024F85' },
  },
})

export default createAppContainer(RouteStack)
