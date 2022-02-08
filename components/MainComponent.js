import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import BakeryInfo from './BakeryInfoComponent';
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

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Menu: { screen: DirectoryNavigator }
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