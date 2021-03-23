import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';
import SettingsScreen from './src/screens/Settings';
import HomeIcon from './src/images/home.png';
import ProfileIcon from './src/images/profile.png';
import SettingsIcon from './src/images/settings.png'; 

const TabNavigator = createBottomTabNavigator({
  // Your Screens
  Home: HomeScreen,
  Profile: ProfileScreen,
  Settings: SettingsScreen,
},
// Tab icons and configurations
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      tintColor= 'blue';
      let iconName;
      switch (routeName) {
        case 'Home':
          iconName = HomeIcon;
          break;
          case 'Profile':
          iconName = ProfileIcon;
          break;
          case 'Settings':
          iconName = SettingsIcon;
          break;
        default:
          break;
      }
      
      // You can return any component that you like here!
      return <Image source={iconName} style={{height: 25, width: 25}} tintColor={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  },
}

);
export default createAppContainer(TabNavigator);
