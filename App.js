/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Button, Image, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {


  constructor(props) {
    super(props);
    this.offset = 0;
    this.pageCount = 25;
    this.state = {
      listData: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this.refresh();
  }

  fetchData(isFirst) {
    fetch(`http://api.douban.com/v2/movie/top250?start=${this.offset}&count=${this.pageCount}`)
      .then((response) => {
        const { status: code, headers: { map: { date } } } = response;
        console.log('lxh..', date + '>>code:' + code);
        const jobjPro = response.json();
        console.log('lxh', jobjPro);
        return jobjPro;
      }).then((resp) => {
        const obj = resp.subjects;
        console.log('lxh>>>>>>>>>', obj);
        this.offset += this.pageCount;
        this.setState({
          listData: isFirst ? obj : [...this.state.listData, ...obj],
        });
      }).catch((error) => {
        console.log('lxh', error);
      }).done(() => {
        this.setState({
          refreshing: false,
        });
      });
  }

  refresh = () => {
    this.setState({
      refreshing: true,
    });
    this.offset = 0;
    this.fetchData(true);
  }

  loadMore = () => {
    this.fetchData();
  }
  render() {
    const { listData = [], refreshing } = this.state;
    console.log('lxh>>>', listData);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js0000</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title={'加载网络数据'} onPress={() => {
          this.refresh();
          console.log('lxh');
        }} />
        <FlatList
          refreshing={refreshing}
          data={listData}
          keyExtractor={(item) => item.id}
          style={{ height: '100%', width: '100%' }}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => {
                console.log('lxh>>>>');
              }}
              style={{ flexDirection: 'row', marginTop: 10 }}>
              <Image
                source={{ uri: item.images.large }}
                style={{ width: 100, height: 100 }}
              />
              <View style={{ justifyContent: 'space-between', marginLeft: 10 }}>
                <Text style={{ color: 'black' }}>{item.title}</Text>
                <Text style={{ color: 'orange' }}>上映时间：{item.year}</Text>
                <Text style={{ color: 'blue' }}>类型：{item.genres.join(',')}</Text>
              </View>
            </TouchableOpacity>
          }
          onRefresh={this.refresh}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
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
