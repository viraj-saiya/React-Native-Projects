import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  //   const count = 0
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Text style={{margin: 10}}> Count : {count}</Text>
        <TouchableOpacity
          style={{margin: 10,padding:20, backgroundColor: 'blue'}}
          onPress={() => {
            console.log('inc');
            dispatch(increment());
          }}>
          <Text style={{textAlign:'center'}}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{margin: 10, backgroundColor: 'blue',padding:20}}
          onPress={() => dispatch(decrement())}>
          <Text style={{textAlign:'center'}}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Counter;
