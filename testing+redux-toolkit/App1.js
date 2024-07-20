import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import Counter from './src/app/features/counter/Counter'
export default function App() {
  return (
    <View style={{flex:1,justifyContent:'center',paddingHorizontal:20}}>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({});
