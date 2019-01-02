
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Button, Image, TouchableOpacity } from 'react-native';
import { Routes } from '../core/Constant';


/**
 * @description 关于我们
 * @author shawn.li
 * @date 2019-01-02
 * @export
 * @class AboutUsScreen
 * @extends {Component}
 */
export default class AboutUsScreen extends Component  {
  static navigationOptions=()=>{
    return {headerTitle:'关于我们'};
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="跳转到登录" onPress={()=>{
          this.props.navigation.push(Routes.Login);
        }}/>
      </View>
    );
  }
}