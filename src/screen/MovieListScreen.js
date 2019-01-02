

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Button, Image, TouchableOpacity } from 'react-native';
import WebApi from '../core/WebApi';


export default class MovieListScreen extends Component  {

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
    WebApi.getMList(this.offset,this.pageCount).then((resp) => {
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
