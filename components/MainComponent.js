import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import BakeryInfo from './BakeryInfoComponent';
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Constants from 'expo-constants';
import { View, Platform, StyleSheet, Text, ScrollView, Image, } from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from "react-native-safe-area-view";

const DirectoryNavigator = createStackNavigator(
    {
      Directory: { 
        screen: Directory,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon
                name='list'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
      },
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
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'pink'
            },
            headerTintColor: '#ce4165',
            headerTitleStyle: {
                color: '#ce4165'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'pink'
            },
            headerTintColor: '#ce4165',
            headerTitleStyle: {
                color: '#ce4165'
            },
            headerLeft: <Icon
                name='info-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'pink'
            },
            headerTintColor: '#ce4165',
            headerTitleStyle: {
                color: '#ce4165'
            },
            headerLeft: <Icon
                name='address-card'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./images/sprinkles.jpg")}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Amanda's Pastry Shop</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Menu: { screen: DirectoryNavigator },
        About: { screen: AboutNavigator },
        Contact: { screen: ContactNavigator },
    },
    {
      drawerBackgroundColor: 'pink',
      contentComponent: CustomDrawerContentComponent,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "pink",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

export default Main;