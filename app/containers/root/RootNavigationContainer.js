import React, {Component} from 'react';
import { StyleSheet, Text,Button, Image, View } from 'react-native';
import {
  createStackNavigator,
//   addNavigationHelpers
} from 'react-navigation';

// screen
import HomeScreen from '../home/HomeScreen'
import MineScreen from '../mine/MineScreen'
import HotScreen from '../hot/HotScreen'
import SetScreen from '../setting/SetScreen'
import AnalysisScreen from '../home/AnalysisScreen'
import RuleScreen from '../home/RuleScreen'
import CalendarScreen from '../home/CalendarScreen'

// dva
// import { connect } from 'dva'
import {connect} from 'react-redux'

// this is home page 
const MainNavigator = createStackNavigator({
    Home:{
        screen: CalendarScreen
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


@connect(({ router }) => ({ router }))
class Router extends Component {
    render() {
    //   const { dispatch, router } = this.props
    //   const navigation = addNavigationHelpers({ dispatch, state: router })
      return <RootNavigator  />
    }
}

export default Router