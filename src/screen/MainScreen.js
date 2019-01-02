import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import MovieListScreen from "./MovieListScreen";
import TabMeScreen from "./TabMeScreen";

const MainScreen = createBottomTabNavigator({
  MovieListScreen: MovieListScreen,
  TabMeScreen: TabMeScreen,
}, {
  tabBarOptions: {

  }
});
MainScreen.navigationOptions = ({
  navigation
}) => {
  const state = navigation.state.routes[navigation.state.index];
  const {
    routeName,
    params = {},
    key
  } = state;
  console.log('lxh', 'routeName:' + routeName);
  headerTitle = '首页';
  return {
    headerTitle
  };
};
export default createAppContainer(MainScreen);