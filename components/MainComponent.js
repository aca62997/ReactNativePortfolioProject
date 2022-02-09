import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import BakeryInfo from './BakeryInfoComponent';
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        BakeryInfo: { screen: BakeryInfo }
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'pink'
            },
            headerTintColor: '#ce4165',
            headerTitleStyle: {
                color: '#ce4165'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'pink'
            },
            headerTintColor: '#ce4165',
            headerTitleStyle: {
                color: '#ce4165'
            }
        }
    }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "pink",
      },
      headerTintColor: "#ce4165",
      headerTitleStyle: {
        color: "#ce4165",
      },
    },
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "pink",
      },
      headerTintColor: "#ce4165",
      headerTitleStyle: {
        color: "#ce4165",
      },
    },
  }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Menu: { screen: DirectoryNavigator },
        About: { screen: AboutNavigator },
        Contact: { screen: ContactNavigator },
    },
    {
        drawerBackgroundColor: 'pink'
    }
);

const AppNavigator = createAppContainer(MainNavigator)

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;