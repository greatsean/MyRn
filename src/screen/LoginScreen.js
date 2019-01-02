
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Button, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


/**
 * @description 登录页
 * @author shawn.li
 * @date 2019-01-02
 * @export
 * @class LoginScreen
 * @extends {Component}
 */
export default class LoginScreen extends Component  {
  static navigationOptions=()=>{
    return {headerTitle:'登录'}
  }

  constructor(props) {
    super(props);
    this.state = {
      nameBox: '',
    };
  }

 
  render() {
    const {  } = this.state;
    return (
      <View style={styles.container}>
      <TextInput style={{width:'100%',height:80}} placeholder="输入用户名"  onChange={(s)=>{
        console.log('lxh',s);
      }}/>
      <TextInput style={{width:'100%',height:80}}  placeholder="输入密码"  onChange={(s)=>{
        console.log('lxh',s);
      }}/>
        <Button title={'登录'} onPress={() => {
          console.log('lxh');
        }} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 3,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
