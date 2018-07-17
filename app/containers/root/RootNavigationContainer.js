import React from 'react';
import { StyleSheet, Text,Button, Image, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

// screen
import HomeScreen from '../home/HomeScreen'
import MineScreen from '../mine/MineScreen'
import HotScreen from '../hot/HotScreen'
import SetScreen from '../setting/SetScreen'


// this is home page 
const MainNavigator = createStackNavigator({
    Home:{
        screen: HomeScreen
    },
    Mine:{
        screen: MineScreen
    },
  },{

  });


const ModalNabigator = createStackNavigator({
    Hot: {
        screen: HotScreen
    },
    Set: {
        screen: SetScreen
    }
  },{

  });


  // this is home page 
const RootNavigator = createStackNavigator({
    Main:{
        screen: MainNavigator
    },
    Hot:{
        screen: ModalNabigator
    }
  },{
    headerMode: "none",
    mode: 'modal',
    gesturesEnabled: false
  });


export default RootNavigator