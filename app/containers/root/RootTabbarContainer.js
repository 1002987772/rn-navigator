import React from 'react';
import { StyleSheet, Text,Button, Image, View } from 'react-native';
import {
  createBottomTabNavigator,
} from 'react-navigation';

/**
 * 配置 TabNavigation 
 */
const TabNavigator = createBottomTabNavigator(
  {
    
  },
  {
    tabBarOptions: {
      style:{
        backgroundColor:'white',
      },
      activeTintColor: colors.primary,
      inactiveTintColor: 'gray',
      showLabel: globalSetting.showTabLable, // 如果要隐藏 tab icon 下面的文字 设置为false
    },
  }
);

/* change top navigation bar title */
TabNavigator.navigationOptions = ({ navigation }) => {
  
  let { routeName } = navigation.state.routes[navigation.state.index];
  // You can do whatever you like here to pick the title based on the route name
  let headerTitle = routeName;
  
  let headerRight =  (
    <Button
      onPress={() => {
        navigation.navigate('Login')
      }}
      title="login"
      color="#fff"
    />
  );

  let headerLeft =  (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
  );

  if (routeName === 'Home')
   return {
    headerLeft,
    headerTitle,
    headerRight,
   }
  return {
    headerTitle,
    headerRight,
  };
};


export default TabNavigator;
