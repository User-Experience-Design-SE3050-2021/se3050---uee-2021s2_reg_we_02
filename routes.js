import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DashBoard from './component/DashBoard/index';
import Profile from './component/Profile/index';
import AllCategoriesList from './component/ViewAllCategories/index';
import ItemView from './component/ItemView/index';
import CategoryView from "./component/CategoryView/CategoryView";
import NewAdvertisement1 from "./component/NewAdvertisementInterface1/NewAdvertisement";
import NewAdvertisement2 from "./component/NewAdvertisementInterface2/NewAdvertisement2";
import OngoingAds from "./component/OngoingAds/OngoingAds";
import UpdateAdvertisement from "./component/UpdateAdvertisementInterface1/UpdateAdvertisement";
import UpdateAdvertisement2 from "./component/UpdateAdvertisementInterface2/UpdateAdvertisement2";

//vihanga
import login from './component/Login/login'
import Forgetpassword from './component/ForgotPassword/forgetpassword'
import Signup from './component/Signup/signup'
import contactUs from './component/ContactUs/contactUs'
import policies from './component/PrivacyPolicies/privacyPolicies'
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
    DashBoard: {
        screen: DashBoard,
        navigationOptions: {
            title: 'Enna.lk - Buy & Sell Anything'
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Enna.lk - Buy & Sell Anything',
        }
    },
    AllCategoriesList:{
        screen: AllCategoriesList,
        navigationOptions: {
            title: 'Enna.lk - Buy & Sell Anything',
        }
    },
    ItemView:{
        screen: ItemView,
        navigationOptions: {
            title: 'Enna.lk - Buy & Sell Anything',
        }
    },
    CategoryView:{
        screen: CategoryView,
        navigationOptions: {
            title: 'Enna.lk - Buy & Sell Anything',
        }
    },
    NewAdvertisement1: {
        screen: NewAdvertisement1,
        navigationOptions: {
            title: 'Enna.lk - Buy & Sell Anything',
        }
    },
    NewAdvertisement2: {
        screen: NewAdvertisement2,
        navigationOptions: {
            title: 'Enna.lk - Buy & Sell Anything',
        }
    },
    OngoingAds: {
        screen: OngoingAds,
        navigationOptions: {
            title: 'Enna.lk - Buy & Sell Anything',
        }
    },
    UpdateAdvertisement: {
        screen: UpdateAdvertisement,
        navigationOptions: {
            title: 'Enna.lk - Buy & Sell Anything',
        }
    },
    UpdateAdvertisement2: {
        screen: UpdateAdvertisement2,
        navigationOptions: {
            title: 'Enna.lk - Buy & Sell Anything',
        }
    }


};

// home stack navigator screens
const RouteStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#024F85' }
    }
});

export default createAppContainer(RouteStack);