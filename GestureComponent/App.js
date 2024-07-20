/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useCallback,useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from './component/BottomSheet';


const App= () => {
  const ref=useRef(null)
  const onPress = useCallback(()=>{
    const isActive = ref?.current?.isActive()
    if (isActive){
      ref?.current?.scrollTo(0)
    }else{
      ref?.current?.scrollTo(-200)

    }
  },[])
  return(
    <GestureHandlerRootView style={{flex: 1}}>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}  />
        <BottomSheet ref={ref}>

          <View style={{flex:1,backgroundColor:'orange'}}>
              
          </View>
        </BottomSheet>

      </View>
    </GestureHandlerRootView>
    )
  
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button :{
    backgroundColor:'white',
    opacity:0.6,
    borderRadius:25,
    aspectRatio:1,
    height:50,
    bottom:50
  }
  
});

export default App;
