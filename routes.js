import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DashBoard from './component/DashBoard/index';
import Profile from './component/Profile/index';
import AllCategoriesList from './component/ViewAllCategories/index';
import ItemView from './component/ItemView/index';
import CategoryView from "./component/CategoryView/CategoryView";
const screens = {
    DashBoard: {
        screen: DashBoard,
        navigationOptions: {
            title: 'Enna.lk'
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Enna.lk',
        }
    },
    AllCategoriesList:{
        screen: AllCategoriesList,
        navigationOptions: {
            title: 'Enna.lk',
        }
    },
    ItemView:{
        screen: ItemView,
        navigationOptions: {
            title: 'Enna.lk',
        }
    },
    CategoryView:{
        screen: CategoryView,
        navigationOptions: {
            title: 'Enna.lk',
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